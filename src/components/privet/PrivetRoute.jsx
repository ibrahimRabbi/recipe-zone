import React, { useContext } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';
import { BallTriangle } from 'react-loader-spinner'
const PrivetRoute = ({ children }) => {
    
    const { user, loading } = useContext(Context)
    const location = useLocation();
   
    if (loading) {
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
    if (user) {
        return children
    }
    return <Navigate to='/signin' state={{from:location}}/>  
};

export default PrivetRoute;