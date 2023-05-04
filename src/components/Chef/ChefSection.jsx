import React,{useState,useEffect} from 'react';
import ChefCard from './ChefCard';
import { BallTriangle } from 'react-loader-spinner'

const ChefSection = () => {

    const [data, setData] = useState(null)
    
    useEffect(() => {
        fetch('https://server-recipe-ibrahimrabbi.vercel.app/chef')
            .then(res => res.json())
            .then(res=>setData(res))
    },[])
 
    if (data) {
        return (
            <section className='my-16 w-[90%] mx-auto'>
                <div className='lg:w-[40%] w-[94%] text-center mx-auto'>
                    <h1 className='text-2xl font-semibold mb-2'>Chef & Recipes</h1>
                    <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum at, velit fugiat facilis quo dolores?</p>
                    <hr className='mt-2 border border-purple-600' />
                </div>
                <div className='lg:grid grid-cols-3 gap-7 mt-12'>
                    {
                        data.map(v => <ChefCard key={v.id} obj={v} />)
                    }
                </div>
            </section>
        ); 
    } else {
        return <div className='flex justify-center py-40 '>
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

export default ChefSection;