import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SkillTreeProvider } from './context/SkillTreeContext';
import SkillTreeRoute from './routes/SkillTreeRoute';
import ExploreRoute from './routes/ExploreRoute';

export default function App() {
  return (
    <AuthProvider>
      <SkillTreeProvider>
        <Routes>
          <Route path="/" element={<SkillTreeRoute />} />
          <Route path="/explore" element={<ExploreRoute />} />
          <Route path="/explore/*" element={<ExploreRoute />} />
          <Route path="*" element={<SkillTreeRoute />} />
        </Routes>
      </SkillTreeProvider>
    </AuthProvider>
  );
}
