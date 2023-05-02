import React from 'react';
import ChefCard from './ChefCard';


const ChefSection = ({ data }) => {
   
    return (
        <section className='my-16 w-[90%] mx-auto'>
            <div className='w-[40%] text-center mx-auto'>
                <h1 className='text-2xl font-semibold mb-2'>Chef & Recipes</h1>
                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at, velit fugiat facilis quo dolores?</p>
                <hr className='mt-2 border border-purple-600'/>
            </div>
            <div className='grid grid-cols-3 gap-7 mt-12'>
                {
                    data.map(v => <ChefCard key={v.id} obj={v} />)
                }
            </div>
       </section>
    );
};

export default ChefSection;