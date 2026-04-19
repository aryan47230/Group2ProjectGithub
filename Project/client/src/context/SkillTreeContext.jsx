import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { useAuth } from './AuthContext';
import { apiGetTrees, apiSaveTree, apiDeleteTree, apiGenerateSkillTree } from '../utils/api';

const SkillTreeContext = createContext(null);

export function SkillTreeProvider({ children }) {
  const { user, ready: authReady, pendingImport } = useAuth();
  const [serverTrees, setServerTrees] = useState([]);
  const [localTrees, setLocalTrees] = useState(() =>
    JSON.parse(localStorage.getItem('skillTrees') || '[]')
  );

  // active tree (in-memory only — not rendered until user opens/generates)
  const [currentTopic, setCurrentTopic] = useState('');
  const [currentNodes, setCurrentNodes] = useState([]);
  const [completedNodes, setCompletedNodes] = useState(() => new Set());
  const [generating, setGenerating] = useState(false);
  const [generateError, setGenerateError] = useState('');

  // Load from server when user logs in / on boot
  useEffect(() => {
    if (!authReady) return;
    if (user) {
      apiGetTrees().then((trees) => setServerTrees(trees || []));
    } else {
      setServerTrees([]);
    }
  }, [user, authReady]);

  // After import is accepted (pendingImport becomes null + localStorage cleared), refresh server trees
  const prevPending = useRef(pendingImport);
  useEffect(() => {
    if (prevPending.current && !pendingImport && user) {
      // Import was just resolved (accepted or dismissed). Refresh both lists.
      apiGetTrees().then((trees) => setServerTrees(trees || []));
      setLocalTrees(JSON.parse(localStorage.getItem('skillTrees') || '[]'));
    }
    prevPending.current = pendingImport;
  }, [pendingImport, user]);

  const savedTrees = user ? serverTrees : localTrees;

  const persistTree = useCallback(
    async (entry) => {
      if (user) {
        await apiSaveTree(entry);
        setServerTrees((prev) => {
          const idx = prev.findIndex((t) => t.topic.toLowerCase() === entry.topic.toLowerCase());
          if (idx >= 0) {
            const next = [...prev];
            next[idx] = entry;
            return next;
          }
          return [entry, ...prev];
        });
      } else {
        const all = JSON.parse(localStorage.getItem('skillTrees') || '[]');
        const idx = all.findIndex((t) => t.topic.toLowerCase() === entry.topic.toLowerCase());
        if (idx >= 0) all[idx] = entry;
        else all.unshift(entry);
        localStorage.setItem('skillTrees', JSON.stringify(all));
        setLocalTrees(all);
      }
    },
    [user]
  );

  const deleteTree = useCallback(
    async (topic) => {
      if (user) {
        await apiDeleteTree(topic);
        setServerTrees((prev) => prev.filter((t) => t.topic !== topic));
      } else {
        const all = JSON.parse(localStorage.getItem('skillTrees') || '[]').filter(
          (t) => t.topic !== topic
        );
        localStorage.setItem('skillTrees', JSON.stringify(all));
        setLocalTrees(all);
      }
    },
    [user]
  );

  const openTree = useCallback((saved) => {
    setCurrentTopic(saved.topic);
    setCurrentNodes(saved.nodes);
    setCompletedNodes(new Set(saved.completed || []));
  }, []);

  const closeTree = useCallback(() => {
    setCurrentTopic('');
    setCurrentNodes([]);
    setCompletedNodes(new Set());
  }, []);

  const toggleComplete = useCallback(
    (nodeName) => {
      setCompletedNodes((prev) => {
        const next = new Set(prev);
        if (next.has(nodeName)) {
          next.delete(nodeName);
          // Recursively uncomplete anything whose prerequisites are no longer all satisfied
          const cascade = (name) => {
            for (const node of currentNodes) {
              if (node.requires?.includes(name) && next.has(node.name)) {
                next.delete(node.name);
                cascade(node.name);
              }
            }
          };
          cascade(nodeName);
        } else {
          next.add(nodeName);
        }
        // Persist asynchronously (don't block UI)
        const entry = {
          topic: currentTopic,
          nodes: currentNodes,
          completed: [...next],
          savedAt: Date.now(),
        };
        persistTree(entry);
        return next;
      });
    },
    [currentNodes, currentTopic, persistTree]
  );

  const generateTree = useCallback(
    async (topic, context) => {
      setGenerating(true);
      setGenerateError('');
      try {
        const nodes = await apiGenerateSkillTree(topic, context);
        setCurrentTopic(topic);
        setCurrentNodes(nodes);
        setCompletedNodes(new Set());
        // Save immediately
        const entry = { topic, nodes, completed: [], savedAt: Date.now() };
        await persistTree(entry);
        return { topic, nodes };
      } catch (err) {
        setGenerateError(err.message);
        throw err;
      } finally {
        setGenerating(false);
      }
    },
    [persistTree]
  );

  return (
    <SkillTreeContext.Provider
      value={{
        savedTrees,
        currentTopic,
        currentNodes,
        completedNodes,
        generating,
        generateError,
        generateTree,
        openTree,
        closeTree,
        toggleComplete,
        deleteTree,
      }}
    >
      {children}
    </SkillTreeContext.Provider>
  );
}

export function useSkillTree() {
  const ctx = useContext(SkillTreeContext);
  if (!ctx) throw new Error('useSkillTree must be used within SkillTreeProvider');
  return ctx;
}
