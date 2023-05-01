import React,{useContext} from 'react';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';


const SignUp = () => {

      const  {signUp,emailVarification,profile} = useContext(Context)
      const navigate = useNavigate()
     
    
    const submit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        signUp(email,password)
            .then(res => {
                emailVarification(res.user) 
                profile(res.user,name)
                alert('pleas check your email and verify your email')
                navigate('/signin')
        })
        .catch(error => alert(error.message))
        e.target.reset()
 
    }





    return (
        <section className="text-center m-auto my-10 py-5 border rounded-lg w-[50%]">
            <h1 className="text-purple-600 text-2xl font-semibold">Sign Up</h1>
            <form className="m-7 flex flex-col gap-7" onSubmit={submit} action="">
                <input type="text" name='name' placeholder="user name" className="input input-bordered border-purple-500 w-full" required />
                <input type="email" name='email' placeholder="Email" className="input input-bordered border-purple-500 w-full" required />
                <input type="password" name='password' placeholder="password" className="input input-bordered border-purple-500 w-full" required />
                <input className=" font-semibold border bg-purple-500 p-3 rounded-lg text-slate-50" type="submit" value='Sign Up' />
            </form>
            <p className="font-semibold">already have an account ? <Link to='/signin' className="text-purple-500 font-semibold">Sign In</Link></p>
            <span className="text-xl font-semibold text-gray-600">or</span>
            <div className="flex flex-col gap-3 w-[60%] m-auto mt-7">
                <button className="btn btn-outline border-purple-600">Continue with Google</button>
                <button className="btn btn-outline border-purple-600">Continue with Facebook</button>
            </div>

        </section>
    );
};

export default SignUp;