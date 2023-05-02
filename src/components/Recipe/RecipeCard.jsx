import React from 'react';
 import './recipe.css'

const RecipeCard = ({ recipeData }) => {
    const {recipeName,ingradiants,mathod}=recipeData
    
    return (
        
        <div className='rounded-lg border-purple-600 border-2 px-10 py-8 mt-10'>
            <h1 className='text-center font-bold text-3xl'>{recipeName}</h1>
            <hr className='mt-4 border-2' />
            <div className='grid recipe mt-10'>
                <div className='font-semibold'>
                    <h1 className='text-2xl'>Ingradiants</h1>
                    <ul className='ml-5 mt-3'>{ingradiants.map(v => <li className='list-disc' key={Math.random()}>{v}</li>)}</ul>
                </div>
                <div className='font-semibold'>
                    <h1 className='text-2xl'>Cooking mathod</h1>
                    <ol className='ml-10 mt-3'>{mathod.map(v => <li className='list-decimal mt-2' key={Math.random()}>{v}</li>)}</ol>
                </div>
                </div>
            </div>
       
    );
};

export default RecipeCard;