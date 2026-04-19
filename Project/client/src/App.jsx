import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SkillTreeProvider } from './context/SkillTreeContext';
import SkillTreeRoute from './routes/SkillTreeRoute';
import ExploreRoute from './routes/ExploreRoute';
import AdvancedSkillTreeRoute from './routes/AdvancedSkillTreeRoute';
import LauncherScreen from './components/LauncherScreen/LauncherScreen';

export default function App() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    setTransitioning(true);
    const timer = setTimeout(() => setTransitioning(false), 50);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <AuthProvider>
      <SkillTreeProvider>
        <LauncherScreen />
        <div className={`route-container ${transitioning ? 'route-entering' : 'route-visible'}`}>
          <Routes>
            <Route path="/" element={<SkillTreeRoute hideExplore />} />
            <Route path="/skill-tree" element={<SkillTreeRoute hideExplore />} />
            <Route path="/skill-tree/advanced" element={<AdvancedSkillTreeRoute />} />
            <Route path="/explore" element={<ExploreRoute />} />
            <Route path="/explore/*" element={<ExploreRoute />} />
            <Route path="*" element={<SkillTreeRoute hideExplore />} />
          </Routes>
        </div>
      </SkillTreeProvider>
    </AuthProvider>
  );
}
