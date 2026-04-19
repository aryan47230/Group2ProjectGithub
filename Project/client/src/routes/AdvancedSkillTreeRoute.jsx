import { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import AppHeader from '../components/AppHeader/AppHeader';
import ImportBanner from '../components/ImportBanner/ImportBanner';
import AuthModal from '../components/Auth/AuthModal';
import { useSkillTree } from '../context/SkillTreeContext';
import { apiGetSkillTreeQuestions } from '../utils/api';
import promptStyles from '../components/SkillTree/SkillTree.module.css';
import styles from './AdvancedSkillTreeRoute.module.css';

function Loader({ label }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        zIndex: 900,
        fontFamily: "var(--font-display, 'Outfit'), sans-serif",
      }}
    >
      <div
        style={{
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: '#ffd27a',
          boxShadow:
            '0 0 12px rgba(255,200,90,0.9), 0 0 28px rgba(255,170,64,0.55), 0 0 60px rgba(255,170,64,0.3)',
          animation: 'branchPulse 1.6s ease-in-out infinite',
        }}
      />
      <div
        style={{
          color: 'rgba(255,200,90,0.85)',
          fontSize: 11,
          letterSpacing: 4,
          textTransform: 'uppercase',
          textShadow: '0 0 10px rgba(255,170,64,0.5)',
        }}
      >
        {label}
      </div>
      <style>{`
        @keyframes branchPulse {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.5); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function AdvancedSkillTreeRoute() {
  const [params] = useSearchParams();
  const topic = (params.get('topic') || '').trim();
  const navigate = useNavigate();
  const { generateTree, generating } = useSkillTree();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loadingQuestions, setLoadingQuestions] = useState(Boolean(topic));
  const [questionError, setQuestionError] = useState('');
  const [topicDraft, setTopicDraft] = useState('');
  const [authMode, setAuthMode] = useState(null);
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    if (!topic) return;
    ran.current = true;
    setLoadingQuestions(true);
    setQuestionError('');
    apiGetSkillTreeQuestions(topic)
      .then((qs) => {
        setQuestions(qs);
        setAnswers(Object.fromEntries(qs.map((q) => [q.id, ''])));
      })
      .catch((err) => {
        setQuestionError(err.message || 'Could not load questions');
      })
      .finally(() => setLoadingQuestions(false));
  }, [topic]);

  function updateAnswer(id, value) {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  }

  async function handleGrow(e) {
    e?.preventDefault?.();
    const context = questions
      .map((q) => ({ question: q.prompt, answer: (answers[q.id] || '').trim() }))
      .filter((c) => c.answer);
    try {
      await generateTree(topic, context);
      navigate('/');
    } catch {
      // error surfaces via SkillTreeContext.generateError on the tree route
    }
  }

  async function handleSkip() {
    try {
      await generateTree(topic);
      navigate('/');
    } catch {
      // error surfaces via SkillTreeContext.generateError on the tree route
    }
  }

  function handleTopicSubmit(e) {
    e.preventDefault();
    const t = topicDraft.trim();
    if (!t) return;
    navigate(`/skill-tree/advanced?topic=${encodeURIComponent(t)}`);
  }

  if (generating) return <Loader label="Growing skill tree" />;
  if (loadingQuestions) return <Loader label="Preparing questions" />;

  const hasAnswer = Object.values(answers).some((v) => (v || '').trim());

  return (
    <>
      <AppHeader
        onSignIn={() => setAuthMode('login')}
        onSignUp={() => setAuthMode('register')}
      />
      <ImportBanner />
      <main className={promptStyles.promptView}>
        <div className={promptStyles.dotGrid} aria-hidden="true" />

        <header className={promptStyles.hero}>
          <span className={promptStyles.eyebrow}>ADVANCED GENERATOR</span>
          <h1 className={promptStyles.heading}>
            A few questions <span className={promptStyles.headingItalic}>to tailor it</span>.
          </h1>
          <p className={promptStyles.subtitle}>
            Your answers shape the skill tree — what you want to do after, where you're starting from,
            how much time you have. Skip any you're not sure about.
          </p>
          {topic && (
            <span className={styles.topicLabel}>
              For <strong>{topic}</strong>
            </span>
          )}
        </header>

        {!topic ? (
          <form className={promptStyles.form} onSubmit={handleTopicSubmit}>
            <span className={promptStyles.formIcon}>▸</span>
            <input
              className={promptStyles.topicInput}
              type="text"
              placeholder="Enter a topic to customize..."
              value={topicDraft}
              onChange={(e) => setTopicDraft(e.target.value)}
              autoFocus
            />
            <button type="submit" className={promptStyles.generateBtn}>
              Next
            </button>
          </form>
        ) : questionError ? (
          <>
            <div className={styles.errorNote}>{questionError}</div>
            <div className={styles.actions}>
              <button className={styles.skipBtn} onClick={() => navigate('/')} type="button">
                Back
              </button>
              <button className={styles.submitBtn} onClick={handleSkip} type="button">
                Use defaults
              </button>
            </div>
          </>
        ) : (
          <form className={styles.questionStack} onSubmit={handleGrow}>
            {questions.map((q, i) => (
              <label key={q.id} className={styles.questionCard}>
                <span className={styles.questionIndex}>QUESTION {String(i + 1).padStart(2, '0')}</span>
                <span className={styles.questionPrompt}>{q.prompt}</span>
                <textarea
                  className={styles.answerInput}
                  value={answers[q.id] || ''}
                  onChange={(e) => updateAnswer(q.id, e.target.value)}
                  placeholder={q.placeholder || ''}
                  rows={3}
                />
              </label>
            ))}

            <div className={styles.actions}>
              <button
                type="button"
                className={styles.backLink}
                onClick={() => navigate(-1)}
              >
                ← Back
              </button>
              <button
                type="button"
                className={styles.skipBtn}
                onClick={handleSkip}
                disabled={generating}
              >
                Skip — use defaults
              </button>
              <button
                type="submit"
                className={styles.submitBtn}
                disabled={generating || !hasAnswer}
              >
                Grow tree
              </button>
            </div>
          </form>
        )}
      </main>

      {authMode && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthMode(null)}
        />
      )}
    </>
  );
}
