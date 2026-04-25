import { createContext, useContext, useReducer, useCallback, useRef } from 'react';
import { fetchConcept, enrichConceptApi, fetchSecondLayerLinks, fetchNodeSummary } from '../utils/api';

const ExplorerContext = createContext(null);

const CLUSTER_KEYWORDS = {
  Science: ['physics', 'chemistry', 'biology', 'quantum', 'science', 'experiment', 'atom', 'molecule', 'evolution', 'genetics'],
  Technology: ['technology', 'computing', 'software', 'internet', 'engineering', 'computer', 'algorithm', 'digital', 'electrical'],
  Mathematics: ['mathematics', 'algebra', 'geometry', 'theorem', 'calculus', 'statistics', 'logic', 'number', 'equation'],
  History: ['history', 'war', 'century', 'ancient', 'empire', 'dynasty', 'civilization', 'revolution', 'medieval'],
  Philosophy: ['philosophy', 'ethics', 'logic', 'metaphysics', 'epistemology', 'consciousness', 'ontology', 'moral'],
  Art: ['art', 'music', 'literature', 'film', 'culture', 'painting', 'poetry', 'architecture', 'cinema'],
  Society: ['society', 'politics', 'economics', 'law', 'social', 'government', 'democracy', 'culture', 'religion'],
};

const CLUSTER_COLORS = {
  Science: '#00d4ff', Technology: '#7c8aff', Mathematics: '#c8a0ff',
  History: '#ffd97c', Philosophy: '#ff9f7c', Art: '#5cffa0',
  Society: '#ff7cc8', Unknown: '#334',
};

function assignCluster(categories = []) {
  const text = categories.join(' ').toLowerCase();
  let best = 'Unknown';
  let bestScore = 0;
  for (const [cluster, keywords] of Object.entries(CLUSTER_KEYWORDS)) {
    const score = keywords.filter((kw) => text.includes(kw)).length;
    if (score > bestScore) { bestScore = score; best = cluster; }
  }
  return best;
}

const initialState = {
  currentConcept: null,
  trail: [],
  trailIndex: -1,
  graphData: null,
  loading: false,
  enriching: false,
  enriched: false, // Whether current concept's connections have been replaced by Gemini
  error: null,
  trailOpen: false,
  previewNode: null,
  expandedNode: null,
  detailLoading: false, // loading indicator for node detail fetch
  prevCenterTitle: null, // title of previous center node for directional spawning
  highlightedNodeId: null,
};

function buildPrimaryNodesAndEdges(concept, existingNodeIds = new Set()) {
  const nodes = [];
  const edges = [];
  for (const conn of (concept.connections || [])) {
    if (!existingNodeIds.has(conn.title)) {
      nodes.push({
        id: conn.title, label: conn.title, type: 'primary',
        relation: conn.relation, strength: conn.strength,
        description: conn.description,
        color: { core: 'blue', related: 'cyan', application: 'gold', foundation: 'purple' }[conn.relation] || 'cyan',
        hopDistance: 0, cluster: null,
      });
    }
    edges.push({
      source: concept.title, target: conn.title,
      strength: conn.strength || 1,
      color: { core: 'blue', related: 'cyan', application: 'gold', foundation: 'purple' }[conn.relation] || 'cyan',
      type: 'connection',
    });
  }
  return { nodes, edges };
}

function computeClusters(nodes) {
  return nodes.map((n) => {
    if (!n.visited || n.type === 'center') return n;
    return { ...n, cluster: assignCluster(n.categories || []) };
  });
}

function reducer(state, action) {
  switch (action.type) {
    case 'LOAD_START':
      return { ...state, loading: true, error: null };

    case 'LOAD_SUCCESS': {
      const concept = action.payload;
      const isHistoryNav = action.isHistoryNav; // back/forward navigation — don't push to trail

      // BUG-03 fix: find the original node ID if Wikipedia redirected the title
      const requestedTitle = action.requestedTitle; // the title we asked for
      const canonicalTitle = concept.title; // the title Wikipedia returned

      let newTrail, newTrailIndex;
      if (isHistoryNav) {
        // BUG-07 fix: back/forward — keep trail as-is, just move the index
        newTrail = state.trail;
        newTrailIndex = action.historyIndex;
      } else {
        const newTrailEntry = { title: canonicalTitle, timestamp: Date.now(), categories: concept.categories || [] };
        const trimmedTrail = state.trail.slice(0, state.trailIndex + 1);
        newTrail = [...trimmedTrail, newTrailEntry];
        newTrailIndex = newTrail.length - 1;
      }
      const visitedTitles = new Set(newTrail.map((t) => t.title));

      // Track previous center for directional spawning
      const oldCenterTitle = state.graphData
        ? state.graphData.nodes.find((n) => n.type === 'center')?.id || null
        : null;

      if (!state.graphData) {
        const { nodes: primaryNodes, edges } = buildPrimaryNodesAndEdges(concept);
        const centerNode = {
          id: canonicalTitle, label: canonicalTitle, type: 'center',
          color: 'gold', hopDistance: 0, cluster: null, categories: concept.categories || [],
        };
        const allNodes = [centerNode, ...primaryNodes].map((n) => ({ ...n, visited: visitedTitles.has(n.id) }));
        return {
          ...state, loading: false, currentConcept: concept,
          trail: newTrail, trailIndex: newTrailIndex,
          graphData: { nodes: computeClusters(allNodes), edges },
          previewNode: null, enriching: false, enriched: false, expandedNode: null,
          prevCenterTitle: null,
        };
      }

      // BUG-03 fix: if Wikipedia redirected, rename the old node ID to the canonical title
      // so edges and references stay consistent
      let preNodes = state.graphData.nodes;
      let preEdges = state.graphData.edges;
      if (requestedTitle && requestedTitle !== canonicalTitle) {
        preNodes = preNodes.map((n) =>
          n.id === requestedTitle ? { ...n, id: canonicalTitle, label: canonicalTitle } : n
        );
        preEdges = preEdges.map((e) => ({
          ...e,
          source: e.source === requestedTitle ? canonicalTitle : e.source,
          target: e.target === requestedTitle ? canonicalTitle : e.target,
        }));
      }

      // Accumulate — only the outgoing center and its primaries change hop distance;
      // already-distant nodes keep their current hopDistance (prevents endless inflation)
      const existingNodes = preNodes.map((n) => {
        if (n.id === canonicalTitle) return { ...n, type: 'center', hopDistance: 0, color: 'gold' };
        if (n.type === 'center') return { ...n, type: 'trail', hopDistance: 1, color: 'gold' };
        if (n.type === 'primary') return { ...n, type: 'dormant', hopDistance: 1 };
        // Trail, dormant, secondary nodes keep their current hopDistance (capped at 4)
        return { ...n, hopDistance: Math.min((n.hopDistance || 0), 4) };
      });

      // If the new concept's title was not already in the graph, the map above
      // produced no center node. Append a fresh center so the graph has a hub
      // and trail/connection edges referencing it survive the dangling-edge filter.
      const hasCenter = existingNodes.some((n) => n.type === 'center');
      const centerEnsuredNodes = hasCenter
        ? existingNodes
        : [
            ...existingNodes,
            {
              id: canonicalTitle,
              label: canonicalTitle,
              type: 'center',
              color: 'gold',
              hopDistance: 0,
              cluster: null,
              categories: concept.categories || [],
            },
          ];

      const existingIds = new Set(centerEnsuredNodes.map((n) => n.id));
      const { nodes: newPrimary, edges: newEdges } = buildPrimaryNodesAndEdges(concept, existingIds);

      const trailEdges = [];
      if (!isHistoryNav && newTrail.length >= 2) {
        const prev = newTrail[newTrail.length - 2].title;
        // Determine if jump was direct (target was a primary/secondary of the old center)
        // Check preNodes (before type transformation) so primary/secondary types are still intact
        const wasDirect = preNodes.some(
          (n) => n.id === canonicalTitle && (n.type === 'primary' || n.type === 'secondary')
        );
        trailEdges.push({
          source: prev, target: canonicalTitle, strength: 3, color: 'gold', type: 'trail',
          trailType: wasDirect ? 'direct' : 'indirect',
        });
      }

      const allNodes = [...centerEnsuredNodes, ...newPrimary].map((n) => ({
        ...n, visited: visitedTitles.has(n.id),
        categories: n.categories || (n.id === canonicalTitle ? concept.categories : []),
      }));

      // Deduplicate and filter edges to only reference nodes that still exist
      // Trail edges get priority — they must not be overwritten by connection edges with the same endpoints
      const allNodeIds = new Set(allNodes.map((n) => n.id));
      const combinedEdges = [...preEdges, ...newEdges, ...trailEdges];
      // Sort trail edges first so they win deduplication
      combinedEdges.sort((a, b) => (b.type === 'trail' ? 1 : 0) - (a.type === 'trail' ? 1 : 0));
      const edgeSet = new Set();
      const allEdges = [];
      for (const e of combinedEdges) {
        if (!allNodeIds.has(e.source) || !allNodeIds.has(e.target)) continue;
        const key = e.source + '→' + e.target;
        if (edgeSet.has(key)) continue;
        edgeSet.add(key);
        allEdges.push(e);
      }

      return {
        ...state, loading: false, currentConcept: concept,
        trail: newTrail, trailIndex: newTrailIndex,
        graphData: { nodes: computeClusters(allNodes), edges: allEdges },
        previewNode: null, enriching: false, enriched: false, expandedNode: null,
        prevCenterTitle: oldCenterTitle,
      };
    }

    case 'LOAD_ERROR':
      return { ...state, loading: false, error: action.payload };

    case 'ENRICH_START':
      return { ...state, enriching: true };

    case 'REPLACE_CONNECTIONS': {
      // Gemini picked new connections — swap out current primary nodes + their secondary children
      const newConnections = action.payload; // [{ title, relation, strength, description }]
      if (!state.graphData) return { ...state, enriching: false };

      const centerTitle = state.currentConcept?.title;

      // Find IDs of current primary nodes (the ones being replaced)
      const oldPrimaryIds = new Set(
        state.graphData.nodes.filter((n) => n.type === 'primary').map((n) => n.id)
      );

      // Find secondary nodes that are children of old primary nodes
      const oldSecondaryIds = new Set();
      for (const edge of state.graphData.edges) {
        if (edge.type === 'secondary' && oldPrimaryIds.has(edge.source)) {
          oldSecondaryIds.add(edge.target);
        }
      }

      // IDs to remove = old primaries + their secondaries (but keep any that are also trail/dormant/center)
      const removeIds = new Set();
      for (const id of oldPrimaryIds) removeIds.add(id);
      for (const id of oldSecondaryIds) removeIds.add(id);

      // Keep nodes that have other roles (trail, dormant, center)
      const keptNodes = state.graphData.nodes.filter((n) => {
        if (!removeIds.has(n.id)) return true;
        // Don't remove trail, dormant, or center nodes even if they match
        if (n.type === 'trail' || n.type === 'dormant' || n.type === 'center') return true;
        return false;
      });

      // Remove edges that connect TO or FROM removed nodes
      const survivingNodeIds = new Set(keptNodes.map((n) => n.id));
      const keptEdges = state.graphData.edges.filter((e) =>
        survivingNodeIds.has(e.source) && survivingNodeIds.has(e.target)
      );

      // Build new primary nodes + edges
      const visitedTitles = new Set(state.trail.map((t) => t.title));
      const existingIds = new Set(survivingNodeIds);
      const newNodes = [];
      const newEdges = [];

      for (const conn of newConnections) {
        if (!existingIds.has(conn.title)) {
          newNodes.push({
            id: conn.title,
            label: conn.title,
            type: 'primary',
            relation: conn.relation,
            strength: conn.strength,
            description: conn.description,
            color: { core: 'blue', related: 'cyan', application: 'gold', foundation: 'purple' }[conn.relation] || 'cyan',
            hopDistance: 0,
            cluster: null,
            visited: visitedTitles.has(conn.title),
            enriched: true,
            categories: [],
          });
          existingIds.add(conn.title);
        }
        newEdges.push({
          source: centerTitle,
          target: conn.title,
          strength: conn.strength || 2,
          color: { core: 'blue', related: 'cyan', application: 'gold', foundation: 'purple' }[conn.relation] || 'cyan',
          type: 'connection',
        });
      }

      // Update concept with new connections list
      const updatedConcept = {
        ...state.currentConcept,
        connections: newConnections,
      };

      return {
        ...state,
        enriching: false,
        enriched: true,
        currentConcept: updatedConcept,
        graphData: {
          nodes: [...keptNodes, ...newNodes],
          edges: [...keptEdges, ...newEdges],
        },
      };
    }

    case 'ENRICH_ERROR':
      return { ...state, enriching: false };

    case 'ADD_SECOND_LAYER': {
      const { parentId, childTitles } = action.payload;
      if (!state.graphData) return state;
      const existingIds = new Set(state.graphData.nodes.map((n) => n.id));
      const existingEdgeKeys = new Set(state.graphData.edges.map((e) => e.source + '→' + e.target));
      const visitedTitles = new Set(state.trail.map((t) => t.title));
      const newNodes = [];
      const newEdges = [];
      for (const title of childTitles) {
        if (!existingIds.has(title)) {
          newNodes.push({
            id: title, label: title, type: 'secondary', color: 'purple',
            hopDistance: 0, cluster: null, visited: visitedTitles.has(title), categories: [],
          });
          existingIds.add(title);
        }
        const edgeKey = parentId + '→' + title;
        if (!existingEdgeKeys.has(edgeKey)) {
          newEdges.push({ source: parentId, target: title, strength: 1, color: 'purple', type: 'secondary' });
          existingEdgeKeys.add(edgeKey);
        }
      }
      return {
        ...state,
        graphData: { nodes: [...state.graphData.nodes, ...newNodes], edges: [...state.graphData.edges, ...newEdges] },
      };
    }

    case 'SET_NODE_SUMMARY': {
      const { nodeId, summary, extract, image } = action.payload;
      if (!state.graphData) return state;
      const updatedNodes = state.graphData.nodes.map((n) =>
        n.id === nodeId ? { ...n, description: summary, extract, image } : n
      );
      return { ...state, graphData: { ...state.graphData, nodes: updatedNodes } };
    }

    case 'SET_EXPANDED':
      return { ...state, expandedNode: action.payload, detailLoading: false };

    case 'DETAIL_LOADING':
      return { ...state, detailLoading: true };

    case 'CLEAR_EXPANDED':
      return { ...state, expandedNode: null, detailLoading: false };

    case 'GO_BACK':
      return state;

    case 'GO_FORWARD':
      return state;

    case 'SET_PREVIEW':
      return { ...state, previewNode: action.payload };

    case 'CLEAR_PREVIEW':
      return { ...state, previewNode: null };

    case 'TOGGLE_TRAIL':
      return { ...state, trailOpen: !state.trailOpen };

    case 'SET_HIGHLIGHT':
      return { ...state, highlightedNodeId: action.payload };

    case 'CLEAR_HIGHLIGHT':
      return { ...state, highlightedNodeId: null };

    default:
      return state;
  }
}

export function ExplorerProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // BUG-07 fix: in-memory cache for visited concepts
  const conceptCache = useRef({});

  const jumpTo = useCallback(async (title) => {
    dispatch({ type: 'LOAD_START' });
    try {
      let concept;
      if (conceptCache.current[title]) {
        concept = conceptCache.current[title];
      } else {
        concept = await fetchConcept(title);
        conceptCache.current[concept.title] = concept;
        // Also cache under the requested title in case of redirect
        if (title !== concept.title) conceptCache.current[title] = concept;
      }
      dispatch({ type: 'LOAD_SUCCESS', payload: concept, requestedTitle: title });
    } catch (err) {
      dispatch({ type: 'LOAD_ERROR', payload: err.message });
    }
  }, []);

  const goBack = useCallback(async () => {
    if (state.trailIndex <= 0) return;
    const targetIndex = state.trailIndex - 1;
    const prevTitle = state.trail[targetIndex].title;
    dispatch({ type: 'LOAD_START' });
    try {
      let concept;
      if (conceptCache.current[prevTitle]) {
        concept = conceptCache.current[prevTitle];
      } else {
        concept = await fetchConcept(prevTitle);
        conceptCache.current[concept.title] = concept;
      }
      dispatch({ type: 'LOAD_SUCCESS', payload: concept, requestedTitle: prevTitle, isHistoryNav: true, historyIndex: targetIndex });
    } catch (err) {
      dispatch({ type: 'LOAD_ERROR', payload: err.message });
    }
  }, [state.trailIndex, state.trail]);

  const goForward = useCallback(async () => {
    if (state.trailIndex >= state.trail.length - 1) return;
    const targetIndex = state.trailIndex + 1;
    const nextTitle = state.trail[targetIndex].title;
    dispatch({ type: 'LOAD_START' });
    try {
      let concept;
      if (conceptCache.current[nextTitle]) {
        concept = conceptCache.current[nextTitle];
      } else {
        concept = await fetchConcept(nextTitle);
        conceptCache.current[concept.title] = concept;
      }
      dispatch({ type: 'LOAD_SUCCESS', payload: concept, requestedTitle: nextTitle, isHistoryNav: true, historyIndex: targetIndex });
    } catch (err) {
      dispatch({ type: 'LOAD_ERROR', payload: err.message });
    }
  }, [state.trailIndex, state.trail]);

  const goToIndex = useCallback(async (targetIndex) => {
    if (targetIndex < 0 || targetIndex >= state.trail.length || targetIndex === state.trailIndex) return;
    const targetTitle = state.trail[targetIndex].title;
    dispatch({ type: 'LOAD_START' });
    try {
      let concept;
      if (conceptCache.current[targetTitle]) {
        concept = conceptCache.current[targetTitle];
      } else {
        concept = await fetchConcept(targetTitle);
        conceptCache.current[concept.title] = concept;
      }
      dispatch({ type: 'LOAD_SUCCESS', payload: concept, requestedTitle: targetTitle, isHistoryNav: true, historyIndex: targetIndex });
    } catch (err) {
      dispatch({ type: 'LOAD_ERROR', payload: err.message });
    }
  }, [state.trailIndex, state.trail]);

  const enrich = useCallback(async () => {
    if (!state.currentConcept || state.enriching) return;
    dispatch({ type: 'ENRICH_START' });
    try {
      const data = await enrichConceptApi(
        state.currentConcept.title,
        state.currentConcept.extract
      );
      if (data.connections && data.connections.length > 0) {
        dispatch({ type: 'REPLACE_CONNECTIONS', payload: data.connections });
      } else {
        dispatch({ type: 'ENRICH_ERROR' });
      }
    } catch (err) {
      console.warn('Enrich failed:', err.message);
      dispatch({ type: 'ENRICH_ERROR' });
    }
  }, [state.currentConcept, state.enriching]);

  const pickCuriosity = useCallback(() => {
    if (!state.graphData) return null;
    const candidates = state.graphData.nodes.filter(
      (n) => n.type !== 'center' && !n.visited && n.type !== 'secondary'
    );
    if (!candidates.length) {
      const all = state.graphData.nodes.filter((n) => n.type !== 'center' && !n.visited);
      if (!all.length) return null;
      const pick = all[Math.floor(Math.random() * all.length)];
      jumpTo(pick.id);
      return pick;
    }
    const preferred = candidates.filter((n) => n.type === 'dormant' || n.type === 'trail');
    const pool = preferred.length ? preferred : candidates;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    jumpTo(pick.id);
    return pick;
  }, [state.graphData, jumpTo]);

  const expandNode = useCallback(async (nodeId) => {
    try {
      const links = await fetchSecondLayerLinks(nodeId);
      dispatch({ type: 'ADD_SECOND_LAYER', payload: { parentId: nodeId, childTitles: links } });
    } catch (err) {
      console.warn('Expand failed:', err.message);
    }
  }, []);

  const showNodeDetail = useCallback(async (node) => {
    // Fetch summary for detail overlay if we don't already have it
    if (node.extract) {
      dispatch({ type: 'SET_EXPANDED', payload: node });
    } else {
      dispatch({ type: 'DETAIL_LOADING' });
      const detail = await fetchNodeSummary(node.id || node.label);
      if (detail) {
        dispatch({ type: 'SET_NODE_SUMMARY', payload: { nodeId: node.id, ...detail } });
        dispatch({ type: 'SET_EXPANDED', payload: { ...node, ...detail } });
      } else {
        dispatch({ type: 'SET_EXPANDED', payload: node });
      }
    }
  }, []);

  const clearExpanded = useCallback(() => dispatch({ type: 'CLEAR_EXPANDED' }), []);
  const setPreview = useCallback((node) => dispatch({ type: 'SET_PREVIEW', payload: node }), []);
  const clearPreview = useCallback(() => dispatch({ type: 'CLEAR_PREVIEW' }), []);
  const toggleTrail = useCallback(() => dispatch({ type: 'TOGGLE_TRAIL' }), []);
  const setHighlight = useCallback((nodeId) => dispatch({ type: 'SET_HIGHLIGHT', payload: nodeId }), []);
  const clearHighlight = useCallback(() => dispatch({ type: 'CLEAR_HIGHLIGHT' }), []);

  const value = {
    ...state,
    jumpTo, goBack, goForward, goToIndex, enrich, pickCuriosity, expandNode,
    showNodeDetail, clearExpanded,
    setPreview, clearPreview, toggleTrail,
    setHighlight, clearHighlight,
    clusterColors: CLUSTER_COLORS,
  };

  return (
    <ExplorerContext.Provider value={value}>
      {children}
    </ExplorerContext.Provider>
  );
}

export function useExplorer() {
  const ctx = useContext(ExplorerContext);
  if (!ctx) throw new Error('useExplorer must be used within ExplorerProvider');
  return ctx;
}
