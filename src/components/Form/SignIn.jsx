import React, { useContext,useState } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa'

const SignIn = () => {
    const location = useLocation()
    const go = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { signIn} = useContext(Context)

    const [error,setError] = useState('')
 
    const loginHandler = (e) => {
        const email = e.target.email.value
        const pass = e.target.password.value

        e.preventDefault()
        signIn(email, pass)
            .then(res => { 
                setError('')
                alert('login successfully')
                navigate('/')
             })
            .catch(error => {
                if (error.message == "Firebase: Error (auth/user-not-found).") {
                    setError('user is not exist in this application plz provied a valid password and email')
                } else if (error.message == 'Firebase: Error (auth/wrong-password).') {
                    setError('invalid password plz provide a valid password')
                }
                console.log(error.message)
        })
  }

    return (
        <div className="text-center m-auto my-10 py-5 border rounded-lg w-[50%]">
            <h1 className="text-purple-600 text-2xl font-semibold">Sign In</h1>
            <form className="m-7 flex flex-col gap-7" onSubmit={loginHandler} action="">
                <input type="email" name='email' placeholder="Email" className="input input-bordered border-purple-500 w-full" required />
                <input type="password" name='password' placeholder="password" className="input input-bordered border-purple-500 w-full" required />
                <p className='text-red-600 font-semibold mb-2'>{error}</p>
                <input className=" font-semibold border bg-purple-500 p-3 rounded-lg text-slate-50" type="submit" value='Sign In' />
            </form>
            <p className="font-semibold">dont have an account ? <Link to='/layout/signup' className="text-purple-500 font-semibold">Register</Link></p>
            <span className="text-xl font-semibold text-gray-600">or</span>
            <div className="flex flex-col gap-3 w-[60%] m-auto mt-7">
                <button className="btn btn-outline border-purple-600 flex gap-1 items-center">
                    <FaGoogle className='text-blue-400 text-xl' />
                    Continue with Google
                </button>
                <button className="btn btn-outline border-purple-600 flex gap-1 items-center">
                    <FaGithub className='text-xl' />
                    Continue with Github
                </button>
            </div>
        </div>
    );
};

export default SignIn;