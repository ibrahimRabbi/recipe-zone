import React,{useContext,useState} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import {FaGoogle,FaGithub} from 'react-icons/fa'

const SignUp = () => {

    const { signUp, profile, signinGoogle } = useContext(Context)
      const navigate = useNavigate()
    const [error, setError] = useState('');
    
    const submit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photo = e.target.photo.value
        
        
        signUp(email,password)
            .then(res => { 
                profile(res.user, name, photo) 
                e.target.reset()
                setError('')
                navigate('/')
        })
            .catch(error => {
                if (error.message == "Firebase: Password should be at least 6 characters (auth/weak-password).") {  
                    setError('please provied a password at least 6 characters')
                }
               
            })
       
 
    }

    const googleHandler = () => {
        signinGoogle()
            
}



    return (
        <section className="text-center m-auto my-10 py-5 border rounded-lg w-[50%]">
            <h1 className="text-purple-600 text-2xl font-semibold">Sign Up</h1>
            <form className="m-7 flex flex-col gap-7" onSubmit={submit} action="">
                <input type="text" name='name' placeholder="user name" className="input input-bordered border-purple-500 w-full" required />
                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered border-purple-500 w-full" required />
                <input type="email" name='email' placeholder="Email" className="input input-bordered border-purple-500 w-full" required />
                <input type="password" name='password' placeholder="password" className="input input-bordered border-purple-500 w-full" required />
                <p className='text-red-600 font-semibold mb-2'>{error}</p>
                <input className=" font-semibold border bg-purple-500 p-3 rounded-lg text-slate-50" type="submit" value='Sign Up' />
            </form>
            <p className="font-semibold">already have an account ? <Link to='/layout/signin' className="text-purple-500 font-semibold">Sign In</Link></p>
            <span className="text-xl font-semibold text-gray-600">or</span>
            <div className="flex flex-col gap-3 w-[60%] m-auto mt-7">
                <button onClick={googleHandler} className="btn btn-outline border-purple-600 flex gap-1 items-center">
                    <FaGoogle className='text-blue-400 text-xl' />
                    Continue with Google
                </button>
                <button className="btn btn-outline border-purple-600 flex gap-1 items-center">
                    <FaGithub className='text-xl'/>
                    Continue with Github
                </button>
            </div>

        </section>
    );
};

export default SignUp;