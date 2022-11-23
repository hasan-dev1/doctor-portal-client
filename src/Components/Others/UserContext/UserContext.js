import React from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import { useState } from "react";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {
  const [selected, setSelected] = React.useState(new Date());
  const [user, setUser] = useState();
  const [darkmode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);

  //createUser
  const creatingUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  //update profile
  const updateprofileinfo = (profile) => {
    setLoading(true);
    return updateProfile(auth.currentUser, profile);
  };

  //login
  const handleLogin = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  //handle signout
  const logout = () => {
    setLoading(true)
    signOut(auth);
  };

  //reset Pass
  const resetYourPass = (pass) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, pass);
  };

  //loginwithgoogle
  const googlelogin = (provider) => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };
  //observation
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    loading,
    darkmode,
    setDarkMode,
    selected,
    setSelected,
    logout,
    handleLogin,
    googlelogin,
    resetYourPass,
    creatingUser,
    updateprofileinfo,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default UserContext;
