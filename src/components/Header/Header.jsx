import React,{useContext} from 'react';
import './header.css'
import { Link ,useNavigate} from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import ActiveLink from '../utility/ActiveLink';

const Header = () => {
    const navigate = useNavigate()
    const { user } = useContext(Context)
  
    return (
        <header className="bg-center bg-no-repeat bg-cover h-screen block">
            <div className=' text-slate-50 relative top-48 mx-auto  w-[45%] text-center'>
                <h4 className=' text-4xl mb-2'>here is thousend of food recipe an world traditional food ..lets enjoy </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat ad quis accusamus doloremque nesciunt, esse sapiente, illum eaque consequatur, cumque animi! Iste, libero totam.</p>
            </div>
        </header>
    );
};

export default Header;