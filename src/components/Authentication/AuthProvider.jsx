import { getAuth, 
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
   
 import app from '../../firebase.config'
import React, { createContext,useState,useEffect } from 'react';
export const Context = createContext();



 const AuthProvider = ({children}) => {
     
     const auth = getAuth(app);
     const [user, setUser] = useState(null)
     const [loading,setLoading] = useState(true)

     const signUp = (email, password) => {
         setLoading(true)
          return createUserWithEmailAndPassword(auth,email,password)
     }

    //  const emailVarification = (user) => {
    //      return sendEmailVerification(user)
    //  }
     const profile = (user,name,photo) => {
        return updateProfile(user,{displayName:name,photoURL:photo})
     }

     const signIn = (email, pass) => {
         setLoading(true)
         return signInWithEmailAndPassword(auth,email,pass)
     }

     const logOut = () => {
          return signOut(auth)
      }
     
     const googleProvider = new GoogleAuthProvider();  
     const signinGoogle = () => {
         signInWithPopup(auth, googleProvider)
             .then(res => console.log(res.user))
             .catch(error => console.log(error))
     }

     
     
     useEffect(() => {
         const subscribe = onAuthStateChanged(auth, (user) => {
             setUser(user)
             setLoading(false)
         })

         return () => {
             subscribe()
         }
    },[])
     
     
     const v = {
         signUp,
         profile,
         signIn,
         logOut,
         user,
         loading,
         signinGoogle
     }

    return (
        <Context.Provider value={v}>
            {children}
         </Context.Provider>

       
    );
};

export default AuthProvider;