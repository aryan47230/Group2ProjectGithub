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
    <div className={styles.promptView}>
      <h1 className={styles.heading}>What do you want to learn?</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.topicInput}
          type="text"
          placeholder="e.g. cooking, archery, guitar..."
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button type="submit" className={styles.generateBtn} disabled={generating}>
          {generating ? 'Generating...' : 'Generate'}
        </button>
      </form>
      <div className={styles.status}>{shownStatus}</div>

      <div className={styles.exploreCta}>
        <span className={styles.ctaDivider}>or explore a Wikipedia concept</span>
        <form className={styles.exploreForm} onSubmit={handleExplore}>
          <input
            className={styles.exploreInput}
            type="text"
            placeholder="e.g. quantum mechanics, stoicism..."
            value={exploreTopic}
            onChange={(e) => setExploreTopic(e.target.value)}
          />
          <button type="submit" className={styles.exploreBtn}>Explore</button>
        </form>
      </div>

      <SavedTreesList />
    </div>
  );
}
