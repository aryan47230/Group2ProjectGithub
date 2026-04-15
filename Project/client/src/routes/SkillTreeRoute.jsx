import { useState } from 'react';
import AppHeader from '../components/AppHeader/AppHeader';
import ImportBanner from '../components/ImportBanner/ImportBanner';
import AuthModal from '../components/Auth/AuthModal';
import PromptView from '../components/SkillTree/PromptView';
import TreeView from '../components/SkillTree/TreeView';
import { useSkillTree } from '../context/SkillTreeContext';

export default function SkillTreeRoute() {
  const { currentTopic, currentNodes } = useSkillTree();
  const [authMode, setAuthMode] = useState(null); // 'login' | 'register' | null

  const showTree = currentTopic && currentNodes.length > 0;

  return (
    <>
      <AppHeader
        onSignIn={() => setAuthMode('login')}
        onSignUp={() => setAuthMode('register')}
      />
      <ImportBanner />
      {showTree ? <TreeView /> : <PromptView />}
      {authMode && (
        <AuthModal
          initialMode={authMode}
          onClose={() => setAuthMode(null)}
        />
      )}
    </>
  );
}
