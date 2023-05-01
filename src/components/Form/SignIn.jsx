import React, { useContext } from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';


const SignIn = () => {
    const location = useLocation()
    const go = location.state?.from?.pathname || '/'
    const navigate = useNavigate()
    const { signIn } = useContext(Context)


    const loginHandler = (e) => {
        const email = e.target.email.value
        const pass = e.target.password.value

        e.preventDefault()
        signIn(email, pass)
            .then(res => { 
                if (res.user.emailVerified){
                    alert('login succesfully')
                    e.target.reset()
                    navigate(go,{ replace: true })
                } else {
                    alert('your email is not valid please verify your email')
                }
             })
        .catch(error=> console.log(error.message))
  }

    return (
        <div className="text-center m-auto my-10 py-5 border rounded-lg w-[50%]">
            <h1 className="text-purple-600 text-2xl font-semibold">Sign In</h1>
            <form className="m-7 flex flex-col gap-7" onSubmit={loginHandler} action="">
                <input type="email" name='email' placeholder="Email" className="input input-bordered border-purple-500 w-full" required />
                <input type="password" name='password' placeholder="password" className="input input-bordered border-purple-500 w-full" required />
                <input className=" font-semibold border bg-purple-500 p-3 rounded-lg text-slate-50" type="submit" value='Sign In' />
            </form>
            <p className="font-semibold">dont have an account ? <Link to='/signup' className="text-purple-500 font-semibold">Register</Link></p>
        </div>
    );
};

export default SignIn;