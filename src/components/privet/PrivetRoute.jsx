import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import { BallTriangle } from 'react-loader-spinner'
const PrivetRoute = ({ children }) => {
    
    const { user,loading } = useContext(Context)
    if (loading) {
        return <div className='flex justify-center mt-60 '>
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
    if (user) {
        return children
    }
    return <Navigate to='/layout/signin'/>  
};

export default PrivetRoute;