import { RecaptchaVerifier } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ obj }) => {
    const { name, photo, like, titel, totalRec, experiance,id } = obj;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{titel}</p>
                <div className=' mt-2 flex gap-4 text-gray-600 '>
                    <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-lg text-center font-semibold'>{experiance}<span>experiance</span></h1>
                    <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-lg text-center font-semibold'>{totalRec}<span>recipes</span></h1>
                    <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-lg text-center font-semibold'>{like}+<span>Likes</span></h1>
                </div>
                 
                    <Link to={`/${id}`}><button className="btn btn-primary w-[100%] mt-5">View Recipes</button></Link>
                
            </div>
        </div>
    );
};

export default ChefCard;