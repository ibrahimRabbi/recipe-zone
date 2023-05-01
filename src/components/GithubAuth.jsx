import React from 'react';


const GithubAuth = () => {
// const [obj,setObj] = useState(null)
//     const auth = getAuth(app);
//     const provider = new GithubAuthProvider()

//     const handler = () => {
//         signInWithPopup(auth, provider)
//         .then(res => setObj(res.user))
//         .catch(error=>console.log(error))
//     }

//     const signOuthandler = () => {
//         signOut(auth)
//             .then(res => setObj(null))
//         .catch(error=>console.log(error))
//     }

    return (
        <div>
            <h1>this is github component</h1>
            <button>login github</button>
            <button>sign out</button>
            {obj && <div>
                <img  alt="" />
                <h1></h1>
            </div>}
        </div>
    );
};

export default GithubAuth;