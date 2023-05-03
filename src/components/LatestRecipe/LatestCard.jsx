import React from 'react';
const LatestCard = ({ obj }) => {
    const {name,photoUrl} = obj
    return (
        <div className="card w-96 glass">
            <figure><img src={photoUrl} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>published a few minuite ago lets see quick....</p>
                
                    <button className="btn btn-primary w-[100%] mt-2">view recipe   </button>
                
            </div>
        </div>
    );
};

export default LatestCard;