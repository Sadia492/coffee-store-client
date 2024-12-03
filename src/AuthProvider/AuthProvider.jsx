import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const authContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null); // Make sure to set the user to null on sign-out
      }
      setLoading(false);
    });

    // Return the unsubscribe function to clean up
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    setUser,
    signOutUser,
    createUser,
    signInUser,
    loading,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
