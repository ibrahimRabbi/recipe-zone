import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
 import ActiveLink from '../utility/ActiveLink';

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    return (
        <nav className='w-[100%] bg-purple-400'>
            <div className="navbar w-[90%] mx-auto">
                <div className="flex-1">
                    <Link to='/' className="text-2xl font-semibold">RecipeDotcom</Link>
                </div>
                <ul className="gap-7 font-semibold text-xl">
                    <li><ActiveLink to='/'>Home</ActiveLink></li>
                    <li><ActiveLink to='/layout/blog'>Blog</ActiveLink></li>
                    <li>{
                        user ? <div className="tooltip tooltip-bottom " data-tip={user.displayName}>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label> 
                              </div>
                            : <button className='bg-slate-50 p-2 rounded-lg text-lg' onClick={() => navigate('/layout/signin')}>Sign in</button>
                      }
                       
    
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;