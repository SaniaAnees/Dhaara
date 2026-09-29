import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../lib/firebase';
import { signInWithGoogle, signOutUser } from '../services/auth';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!firebaseAuth) { setLoading(false); return undefined; }
    // Firebase normally resolves immediately from persisted browser state. A short
    // fallback prevents a network hiccup from leaving the product behind a loader.
    const fallbackTimer = window.setTimeout(() => setLoading(false), 1800);
    const unsubscribe = onAuthStateChanged(firebaseAuth, (nextUser) => {
      window.clearTimeout(fallbackTimer);
      setUser(nextUser);
      setLoading(false);
    });
    return () => { window.clearTimeout(fallbackTimer); unsubscribe(); };
  }, []);
  const value = useMemo(() => ({ user, loading, signInWithGoogle, signOut: signOutUser }), [user, loading]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used inside AuthProvider.');
  return context;
}
