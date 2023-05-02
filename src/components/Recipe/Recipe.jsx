import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

const Recipe = () => {
     
    const { name, photo, like, titel, totalRec, experiance, id, recipe } = useLoaderData();

    return (
        <div>

            <div className="card card-side w-[80%] mx-auto mt-10 bg-slate-100 shadow-xl">
                <figure><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl font-semibold">{name}</h2>
                    <p className='text-sm font-semibold'>{titel}</p>
                    <div className='flex justify-evenly text-gray-600 '>
                        <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-2xl text-center font-semibold'>{experiance}<span>experiance</span></h1>
                        <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-2xl text-center font-semibold'>{totalRec}<span>recipes</span></h1>
                        <h1 className='flex flex-col border border-purple-500 p-3 rounded-md text-2xl text-center font-semibold'>{like}+<span>Likes</span></h1>  
                    </div>
                </div>
            </div>
            <div className='w-[40%] text-center mx-auto mt-16'>
                <h1 className='text-2xl font-semibold mb-2'>My Recipes</h1>
                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at, velit fugiat facilis quo dolores?</p>
                <hr className='mt-2 border border-purple-600' />
            </div>
            <div className='mt-16 w-[90%] mx-auto'>
                {
                    recipe.map(v => <RecipeCard key={Math.random()} recipeData={v} />)
                }
           </div>
        </div>
    );
};

export default Recipe;