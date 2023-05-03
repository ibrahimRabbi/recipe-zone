import React,{useState,useEffect} from 'react';
import LatestCard from './LatestCard';

const LatestRecipe = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:5000/latest') 
            .then(res => res.json())
        .then(res=>setData(res))
    }, [])
    
    return (
        <section>
            <div className='lg:w-[40%] w-[80%] text-center mx-auto'>
                <h1 className='text-2xl font-semibold mb-2'>Latest recipes</h1>
                <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at, velit fugiat facilis quo dolores?</p>
                <hr className='mt-2 border border-purple-600' />
            </div>
            <div className='w-[90%] mx-auto lg:grid grid-cols-3 gap-6 mt-8'>
                {
                    data.map(v => <LatestCard key={Math.random()} obj={v} />)
                }
            </div>
        </section>
    );
};

export default LatestRecipe;