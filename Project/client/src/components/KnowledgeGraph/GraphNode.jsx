import { useEffect, useRef, useState, memo } from 'react';
import styles from './GraphNode.module.css';

function getOpacity(hopDistance) {
  if (hopDistance === 0) return 1;
  if (hopDistance === 1) return 0.85;
  if (hopDistance === 2) return 0.65;
  return 0.45;
}

// Neon color system — near-transparent fills with bright neon borders
const ACCENT_COLORS = {
  white:  { border: '#00fff2', fill: 'rgba(0, 255, 242, 0.06)',  glow: 'rgba(0,255,242,0.25)',   text: '#00fff2' },
  cyan:   { border: '#4d9fff', fill: 'rgba(77, 159, 255, 0.05)', glow: 'rgba(77,159,255,0.2)',   text: '#4d9fff' },
  blue:   { border: '#4d9fff', fill: 'rgba(77, 159, 255, 0.05)', glow: 'rgba(77,159,255,0.2)',   text: '#4d9fff' },
  gold:   { border: '#ffaa40', fill: 'rgba(255, 170, 64, 0.05)', glow: 'rgba(255,170,64,0.18)',  text: '#ffaa40' },
  purple: { border: '#8b5cf6', fill: 'rgba(139, 92, 246, 0.05)', glow: 'rgba(139,92,246,0.18)',  text: '#8b5cf6' },
  red:    { border: '#ff4466', fill: 'rgba(255, 68, 102, 0.05)', glow: 'rgba(255,68,102,0.15)',  text: '#ff4466' },
};

function useTypingAnimation(label, active) {
  const [displayed, setDisplayed] = useState(active ? '' : label);
  const [isTyping, setIsTyping] = useState(false);
  const prevLabel = useRef(label);

  useEffect(() => {
    if (!active || label === prevLabel.current) {
      setDisplayed(label);
      setIsTyping(false);
      return;
    }
    prevLabel.current = label;
    setDisplayed('');
    setIsTyping(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(label.slice(0, i));
      if (i >= label.length) {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [label, active]);

  return { displayed, isTyping };
}

function abbreviate(label) {
  if (!label) return '';
  if (label.length <= 10) return label;
  const words = label.split(' ');
  if (words.length >= 3) return words.slice(0, 2).map((w) => w.slice(0, 4)).join(' ');
  if (words.length === 2) return words.map((w) => w.slice(0, 5)).join(' ');
  return label.slice(0, 9) + '…';
}

function getNodeSize(type, hopDistance, visited) {
  if (type === 'center') return 96;
  if (type === 'secondary') return 48;
  // Trail nodes (golden, visited) are larger than regular primary nodes
  if (type === 'trail') {
    const hop = Math.min(hopDistance || 0, 3);
    return [80, 80, 64, 32][hop];
  }
  if (type === 'dormant') {
    const hop = Math.min(hopDistance || 0, 3);
    return [60, 60, 48, 28][hop];
  }
  if (type === 'primary') return 68;
  return 56;
}

function GraphNode({ node, x, y, onClick, focused, highlighted }) {
  const isCenter = node.type === 'center';
  const isSecondary = node.type === 'secondary';
  const isDormant = node.type === 'dormant';
  const isTrail = node.type === 'trail';
  const opacity = getOpacity(node.hopDistance || 0);
  const colors = ACCENT_COLORS[node.color] || ACCENT_COLORS.cyan;

  const size = getNodeSize(node.type, node.hopDistance);
  const half = size / 2;

  const shortLabel = abbreviate(node.label);
  const { displayed: typedLabel, isTyping } = useTypingAnimation(shortLabel, isCenter || (!isDormant && !isTrail));

  if (isCenter) {
    return (
      <div
        className={styles.center}
        style={{ left: x - half, top: y - half, width: size, height: size }}
        onClick={() => onClick?.(node)}
        data-node-id={node.id}
      >
        <div className={styles.centerGlow} />
        <div className={styles.radarRing + ' ' + styles.radarRing1} />
        <div className={styles.radarRing + ' ' + styles.radarRing2} />
        <div className={styles.radarRing + ' ' + styles.radarRing3} />
        <div className={styles.centerParticles}>
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className={styles.centerParticle} style={{
              '--dx': `${Math.cos(i * 1.047) * 50}px`,
              '--dy': `${Math.sin(i * 1.047) * 50}px`,
            }} />
          ))}
        </div>
        <div className={styles.centerCircle}>
          <span className={styles.centerLabel}>
            {typedLabel}
            {isTyping && <span className={styles.cursor} />}
          </span>
        </div>
        <div className={styles.centerName}>{node.label}</div>
      </div>
    );
  }

  // Secondary nodes are hexagonal, all others (primary, trail, dormant) are circular
  const shapeClass = isSecondary ? styles.hex : styles.circle;
  const labelClass = isSecondary ? styles.hexLabel : styles.circleLabel;

  function handleClick(e) {
    e.stopPropagation();
    onClick?.(node);
  }

  const isConstellation = (isTrail || isDormant) && (node.hopDistance || 0) >= 3;

  if (isConstellation) {
    return (
      <div
        className={`${styles.node} ${styles.constellation} ${highlighted ? styles.highlighted : ''}`}
        style={{
          left: x - half, top: y - half, width: size, height: size, opacity,
          '--node-border': colors.border, '--node-fill': colors.fill,
        }}
        onClick={handleClick}
        data-node-id={node.id}
      >
        <div className={styles.constellationDot} />
        <div className={`${styles.nodeLabel} ${styles.labelSmall}`}>{node.label}</div>
      </div>
    );
  }

  const isPrimary = node.type === 'primary';

  return (
    <div
      className={`${styles.node} ${isPrimary ? styles.primaryNode : ''} ${focused ? styles.focused : ''} ${highlighted ? styles.highlighted : ''} ${isSecondary ? styles.hexNode : styles.circleNode}`}
      style={{
        left: x - half, top: y - half,
        width: size, height: size,
        opacity,
        '--node-border': colors.border,
        '--node-fill': colors.fill,
        '--node-glow': colors.glow,
        '--node-text': colors.text,
      }}
      onClick={handleClick}
      data-node-id={node.id}
    >
      <div className={shapeClass}>
        <span className={labelClass} style={{ fontSize: isSecondary ? 8 : 10 }}>
          {typedLabel}
          {isTyping && <span className={styles.cursor} />}
        </span>
      </div>
      <div className={`${styles.nodeLabel} ${isSecondary ? styles.labelSmall : ''}`}>
        {node.label}
      </div>
    </div>
  );
}

export default memo(GraphNode, (prev, next) => {
  return prev.x === next.x && prev.y === next.y &&
    prev.focused === next.focused &&
    prev.highlighted === next.highlighted &&
    prev.node.type === next.node.type &&
    prev.node.id === next.node.id &&
    prev.node.visited === next.node.visited &&
    prev.node.hopDistance === next.node.hopDistance;
});
