import React, { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { ArrowRight, Chrome } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function LoginPage() {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const destination = location.state?.from?.pathname || '/app';
  useEffect(() => { if (user) navigate('/app', { replace: true }); }, [user, navigate]);
  if (loading) return <div className="route-loader" aria-label="Checking authentication" />;
  if (user) return <Navigate to="/app" replace />;
  const handleGoogleSignIn = async () => { setError(''); setSubmitting(true); try { await signInWithGoogle(); navigate(destination, { replace: true }); } catch (authError) { if (authError.code !== 'auth/popup-closed-by-user') setError('Google sign-in could not be completed. Please try again.'); } finally { setSubmitting(false); } };
  return <main className="login-page"><div className="login-image"><img src="/images/natural-spring-well-sharp.png" alt="A natural spring in a green landscape" /><div /></div><section className="login-panel"><a href="/" className="login-wordmark"><span>DH</span>AARA</a><div className="login-content"><p className="eyebrow">Spring intelligence platform</p><h1>Welcome to <em>DHAARA.</em></h1><p>Continue to your workspace and explore springs, recharge zones and intervention sites.</p><button className="google-button" onClick={handleGoogleSignIn} disabled={submitting}>{submitting ? <span className="button-spinner" /> : <Chrome size={19} />}<span>{submitting ? 'Connecting to Google...' : 'Continue with Google'}</span><ArrowRight size={18} /></button>{error && <p className="auth-error" role="alert">{error}</p>}<small>Secure sign-in powered by Google.</small></div><p className="login-note">DHAARA / Spring intelligence for resilient communities</p></section></main>;
}
