import React from 'react';
import app from '../firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import { useState } from 'react';


const GoogleAuth = () => {
    const [obj, setObj] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider()


    const handler = () => {
        signInWithPopup(auth, googleProvider)
            .then(res => setObj(res.user))
            .catch(error => console.log(error))
    }

    const signOutHandler = () => {
        signOut(auth)
            .then(res => setObj(null))
            .catch(error => console.log(error))
    }


    return (
        <div>
            <h1>this is google component</h1>
            <button onClick={handler}>loging google</button>
            <button onClick={signOutHandler}>sign out</button>
            <img src={obj?.photoURL} alt="" />
        </div>
    );
};

export default GoogleAuth;