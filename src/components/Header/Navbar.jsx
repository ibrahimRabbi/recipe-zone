import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='w-[100%] bg-purple-400'>
            <div className="navbar w-[90%] mx-auto">
                <div className="flex-1">
                    <Link to='/' className="text-2xl font-semibold">RecipeDotcom</Link>
                </div>
                <ul className="gap-7 font-semibold text-xl">
                    <li><Link>Home</Link></li>
                    <li><Link>Blog</Link></li>
                    <li>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHasxNkppi0NIOQQAiZbZRry9Mn7Bq6LNFw&usqp=CAU' />
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;