import React from 'react';
 import './recipe.css'
import { FaHeart,FaStar,FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useState } from 'react';


const RecipeCard = ({ recipeData }) => {
    const { recipeName, ingradiants, mathod, rating } = recipeData
    const [disabl,setDisabl] =useState(false)

    const handler = () => {
        setDisabl(true)
    }
    
    return (
        
        <div className='rounded-lg border-purple-600 border-2 px-10 py-8 mt-10 bg-slate-50'>
            <h1 className='text-center font-bold text-3xl'>{recipeName}</h1>
            <hr className='mt-4 border-2 border-purple-400'/>
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
            <div className='flex items-center justify-between mt-10'>
                
                    <Rating className='text-2xl text-red-500'
                        placeholderRating={rating}
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar/>}
                        fullSymbol={ <FaStar/>}
                    />
                
                <button onClick={handler}
                    disabled={disabl}
                    className={`flex gap-1 rounded-xl items-center font-semibold p-3  ${disabl ? "opacity-60 bg-slate-500" : 'text-md bg-slate-300 '}`}>
                    <FaHeart className='text-red-500' /> add to Favorite
                </button>
            </div>
            </div>
       
    );
};

export default RecipeCard;