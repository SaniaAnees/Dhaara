import React from 'react';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LandingPage } from './components/landing/LandingPage';
import { DhaaraWorkspace } from './components/app/DhaaraWorkspace';
import { LoginPage } from './pages/LoginPage';

function AuthenticatedApp() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const handleLogout = async () => { await signOut(); navigate('/login', { replace: true }); };
  return <DhaaraWorkspace user={user} onLogout={handleLogout} onBack={() => navigate('/')} />;
}

function AppRoutes() {
  const navigate = useNavigate();
  return <Routes>
    <Route path="/" element={<LandingPage onOpenDemo={() => navigate('/app')} onGetStarted={() => navigate('/app')} />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/app/*" element={<AuthenticatedApp />} />
    <Route path="/demo" element={<Navigate to="/app" replace />} />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Routes>;
}

export function App() {
  return <BrowserRouter><AuthProvider><AppRoutes /></AuthProvider></BrowserRouter>;
}

export default App;
