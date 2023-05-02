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
                <div className="card-actions justify-end">
                    <Link to={`/layout/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;