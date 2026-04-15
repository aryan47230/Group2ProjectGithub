import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSkillTree } from '../../context/SkillTreeContext';
import SavedTreesList from './SavedTreesList';
import styles from './SkillTree.module.css';

export default function PromptView() {
  const { generating, generateError, generateTree } = useSkillTree();
  const [topic, setTopic] = useState('');
  const [exploreTopic, setExploreTopic] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();
  const autoRan = useRef(false);

  async function submitGenerate(value) {
    const t = value.trim();
    if (!t) return;
    setStatus('Generating skill tree...');
    try {
      await generateTree(t);
      setStatus('');
    } catch (err) {
      setStatus(`Error: ${err.message}`);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    submitGenerate(topic);
  }

  function handleExplore(e) {
    e.preventDefault();
    const q = exploreTopic.trim();
    if (q) navigate(`/explore?q=${encodeURIComponent(q)}`);
  }

  // Auto-generate from ?generate= param (used when redirected from a skill node)
  useEffect(() => {
    if (autoRan.current) return;
    const params = new URLSearchParams(window.location.search);
    const auto = params.get('generate');
    if (auto) {
      autoRan.current = true;
      window.history.replaceState({}, '', '/');
      setTopic(auto);
      submitGenerate(auto);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shownStatus = generateError && !status ? `Error: ${generateError}` : status;

  return (
    <main className={styles.promptView}>
      <div className={styles.dotGrid} aria-hidden="true" />

      <header className={styles.hero}>
        <span className={styles.eyebrow}>SKILL TREE GENERATOR · v1</span>
        <h1 className={styles.heading}>
          What do you want <span className={styles.headingItalic}>to learn</span>?
        </h1>
        <p className={styles.subtitle}>
          Type anything — a hobby, a language, a field. We'll chart a layered skill tree.
        </p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <span className={styles.formIcon}>▸</span>
        <input
          className={styles.topicInput}
          type="text"
          placeholder="e.g. cooking, archery, guitar..."
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit" className={styles.generateBtn} disabled={generating}>
          {generating ? 'Generating…' : 'Generate'}
        </button>
      </form>

      <div className={styles.status} aria-live="polite">{shownStatus}</div>

      <div className={styles.divider}>
        <span className={styles.dividerLine} />
        <span className={styles.dividerLabel}>OR EXPLORE A WIKIPEDIA CONCEPT</span>
        <span className={styles.dividerLine} />
      </div>

      <form className={styles.exploreForm} onSubmit={handleExplore}>
        <input
          className={styles.exploreInput}
          type="text"
          placeholder="e.g. quantum mechanics, stoicism..."
          value={exploreTopic}
          onChange={(e) => setExploreTopic(e.target.value)}
        />
        <button type="submit" className={styles.exploreBtn}>Explore →</button>
      </form>

      <SavedTreesList />
    </main>
  );
}
