import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
 import ActiveLink from '../utility/ActiveLink';

const Navbar = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)

    return (
        <nav className='bg-gradient-to-r from-purple-600 to-cyan-400'>
            <div className="navbar lg:w-[94%] mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact text-slate-900 dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><ActiveLink to='/'>Home</ActiveLink></li>
                            <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        </ul>
                    </div>
                    <Link className="text-2xl text-slate-50 normal-case">Recipe Zone</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-slate-50 text-lg font-semibold px-1">
                        <li><ActiveLink to='/'>Home</ActiveLink></li>
                        <li><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <div className="tooltip tooltip-bottom " data-tip={user?.displayName}>
                            <label className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} />
                                </div>
                            </label>
                        </div>
                            : <button className='bg-slate-200 p-2 rounded-lg text-md font-semibold' onClick={() => navigate('/signin')}>Sign in</button>
                    }
                </div>
            </div>
        </nav>
        
    );
};

export default Navbar;