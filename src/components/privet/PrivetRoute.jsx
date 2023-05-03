import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Context } from '../Authentication/AuthProvider';

const PrivetRoute = ({ children }) => {
    
    const { user } = useContext(Context)
    
    if (user) {
        return children
    }
    return <Navigate to='/layout/signin'/>  
};

export default PrivetRoute;