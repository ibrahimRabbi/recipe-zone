import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {
     
    const { name, photo, like, titel, totalRec, experiance, id } = useLoaderData()
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Recipe;