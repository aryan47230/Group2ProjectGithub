import { useRef, useEffect, useState } from 'react';
import { useExplorer } from '../../context/ExplorerContext';
import styles from './PreviewPopover.module.css';

export default function PreviewPopover({ node, x, y }) {
  const { jumpTo, clearPreview, showNodeDetail } = useExplorer();
  const popRef = useRef(null);
  const [offset, setOffset] = useState({ dx: 76, dy: -28 });
  const [positioned, setPositioned] = useState(false);

  // Clamp popover to stay within the canvas viewport
  useEffect(() => {
    setPositioned(false);
    if (!popRef.current) return;

    // Wait one frame for the element to render so we can measure it
    requestAnimationFrame(() => {
      const el = popRef.current;
      if (!el) return;
      const canvas = el.closest('[class*="canvas"]');
      const container = canvas?.parentElement;
      if (!canvas || !container) { setPositioned(true); return; }

      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      let dx = 76, dy = -28;

      // Check right edge: if popover goes beyond container right, flip to left
      if (elRect.right > containerRect.right - 10) {
        dx = -280 - 16;
      }

      // Check bottom edge
      if (elRect.bottom > containerRect.bottom - 10) {
        dy = -(elRect.height + 10);
      }

      // Check top edge
      if (elRect.top < containerRect.top + 10) {
        dy = 40;
      }

      setOffset({ dx, dy });
      setPositioned(true);
    });
  }, [x, y, node]);

  if (!node) return null;

  return (
    <div
      ref={popRef}
      className={styles.popover}
      style={{
        left: x + offset.dx,
        top: y + offset.dy,
        visibility: positioned ? 'visible' : 'hidden',
      }}
      data-popover
    >
      <div className={styles.header}>
        <div className={styles.category}>{node.relation?.toUpperCase() || 'CONCEPT'}</div>
        <h3 className={styles.title}>{node.label}</h3>
        <p className={styles.summary}>{node.description || 'Explore this concept.'}</p>
      </div>
      <div className={styles.actions}>
        <button
          className={styles.jumpBtn}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); clearPreview(); jumpTo(node.label); }}
        >
          JUMP HERE
        </button>
        <button
          className={styles.expandBtn}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); clearPreview(); showNodeDetail(node); }}
        >
          DETAILS
        </button>
        <button
          className={styles.dismissBtn}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); clearPreview(); }}
        >
          x
        </button>
      </div>
    </div>
  );
}
