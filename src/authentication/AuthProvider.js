import React, { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useState } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
        signOut(auth);
    }

    const verifyEmail = () => {
      return sendEmailVerification(auth.currentUser);
    };

    const updateUserProfile = (profile) => {
      return updateProfile(auth.currentUser, profile);
    };

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log('inside auth state changed',currentUser);
          if (currentUser === null || currentUser.emailVerified) {
            setUser(currentUser);
          }
        });
        return () => {
          unsubscribe();
        };
      }, []);

    const authInfo = {
      user,
      createUser,
      signIn,
      logOut,
      providerLogin,
      updateUserProfile,
      verifyEmail,
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;