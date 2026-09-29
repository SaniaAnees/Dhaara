import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { firebaseAuth } from '../lib/firebase';

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

const requireAuth = () => { if (!firebaseAuth) throw new Error('Google sign-in is not configured for this deployment.'); return firebaseAuth; };
export const signInWithGoogle = () => signInWithPopup(requireAuth(), googleProvider);
export const signOutUser = () => firebaseAuth ? signOut(firebaseAuth) : Promise.resolve();
