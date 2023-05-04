import React,{useState,useEffect} from 'react';
import LatestCard from './LatestCard';
import { BallTriangle } from 'react-loader-spinner'
const LatestRecipe = () => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch('https://server-recipe-ibrahimrabbi.vercel.app/latest') 
            .then(res => res.json())
        .then(res=>setData(res))
    }, [])
    if (data) {
        return (
            <section className='mt-10'>
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
    } else {
        return <div className='flex justify-center py-30'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#4fa94d"
                ariaLabel="ball-triangle-loading"
                wrapperClass={{}}
                wrapperStyle=""
                visible={true}
            />
        </div>
    }
   
};

export default LatestRecipe;