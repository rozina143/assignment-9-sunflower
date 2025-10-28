import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import SignUp from '../page/SignUp/SignUp';
 export const AuthContext = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
   const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // ✅ Signup
  const signup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // ✅ Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // ✅ Google Login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // ✅ Logout
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  // ✅ Update User Profile
  const updateUser = (name, photo) => {
    if (!auth.currentUser) return;
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // ✅ Observe user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    user,
    loading,
    signup,
    loginUser,
    googleLogin,
    logout,
    updateUser,
  };


    return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;