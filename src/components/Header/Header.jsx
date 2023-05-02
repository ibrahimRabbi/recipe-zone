import React from 'react';
import './header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="bg-center bg-no-repeat bg-cover h-screen block">
            <nav
                className="flex justify-between items-center w-10/12 mx-auto bg-gradient-to-r from-purple-600 to-cyan-400 px-2.5 py-1 sticky z-10 top-6 rounded-lg ">
                
                <h1 className="text-2xl font-bold">Recipe<span className="text-1xl text-slate-50">Dot</span>com...</h1>
               
                <ul className="flex justify-center items-center gap-6 text-slate-50 font-semibold ">
                    
                    <li><Link>Home</Link></li>
                    <li><Link to='/layout/signup'>Blog</Link></li>
                    <li> 
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvHasxNkppi0NIOQQAiZbZRry9Mn7Bq6LNFw&usqp=CAU' />
                            </div>
                        </label>
                    </li>
                    
                </ul>   
            </nav>

            <div className=' text-slate-50 relative top-48 mx-auto  w-[45%] text-center'>
                <h4 className=' text-4xl mb-2'>here is thousend of food recipe an world traditional food ..lets enjoy </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat ad quis accusamus doloremque nesciunt, esse sapiente, illum eaque consequatur, cumque animi! Iste, libero totam.</p>
            </div>

        </header>
    );
};

export default Header;