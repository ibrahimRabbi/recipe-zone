import React,{useContext} from 'react';
import './header.css'
import { Link ,useNavigate} from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';


const Header = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
  
    return (
        <header className="bg-center bg-no-repeat bg-cover h-screen block">
            <nav
                className="flex justify-between items-center w-10/12 mx-auto bg-gradient-to-r from-purple-600 to-cyan-400 px-2.5 py-1 sticky z-10 top-6 rounded-lg py-2">
                
                <h1 className="text-2xl font-bold">Recipe<span className="text-1xl text-slate-50">Dot</span>com...</h1>
               
                <ul className="flex justify-center items-center gap-6 text-slate-50 font-semibold ">
                    
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/layout/signup'>Blog</Link></li>
                    <li> {
                        user ? <div className="tooltip tooltip-bottom " data-tip={user.displayName}>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>
                              </div>
                            : <button className='bg-slate-50 text-gray-900 p-2 rounded-lg text-sm' onClick={() => navigate('/layout/signin')}>Sign in</button>
                    }
                        
                        
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