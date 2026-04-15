import { useState, useCallback } from 'react';
import { useSkillTree } from '../../context/SkillTreeContext';
import SkillGraph from './SkillGraph';
import DetailPanel from './DetailPanel';
import styles from './SkillTree.module.css';

export default function TreeView() {
  const { currentTopic, currentNodes, completedNodes, closeTree, toggleComplete } = useSkillTree();
  const [selectedNode, setSelectedNode] = useState(null);
  const [panelOpen, setPanelOpen] = useState(false);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
    setPanelOpen(true);
  }, []);

  const handleClosePanel = useCallback(() => {
    setPanelOpen(false);
  }, []);

  const handleToggle = useCallback((name) => {
    toggleComplete(name);
  }, [toggleComplete]);

  // Keep selectedNode reference fresh after toggle (so DetailPanel re-renders from new completedNodes)
  // We use a derived node from currentNodes to ensure we have the latest object
  const activeNode = selectedNode
    ? currentNodes.find((n) => n.name === selectedNode.name) || selectedNode
    : null;

  const total = currentNodes.length;
  const done = completedNodes.size;
  const pct = total ? (done / total) * 100 : 0;

  return (
    <div className={styles.treeView}>
      <div className={styles.treeHeader}>
        <button className={styles.backBtn} onClick={closeTree}>
          <span className={styles.backArrow}>←</span>
          <span>Back</span>
        </button>

        <div className={styles.treeTitleWrap}>
          <span className={styles.treeEyebrow}>TOPIC</span>
          <h2 className={styles.treeTitle}>{currentTopic}</h2>
        </div>

        <div className={styles.progressWrap}>
          <span className={styles.progressLabel}>
            {done.toString().padStart(2, '0')}/{total.toString().padStart(2, '0')} · {Math.round(pct)}%
          </span>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>
      <div className={styles.treeBody}>
        <SkillGraph
          nodes={currentNodes}
          completedNodes={completedNodes}
          onNodeClick={handleNodeClick}
        />
        <DetailPanel
          node={activeNode}
          open={panelOpen && !!activeNode}
          completedNodes={completedNodes}
          onClose={handleClosePanel}
          onToggleComplete={handleToggle}
        />
      </div>
    </div>
  );
}
