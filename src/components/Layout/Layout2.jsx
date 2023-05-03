import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import ChefSection from '../Chef/ChefSection';
import LatestRecipe from '../LatestRecipe/LatestRecipe';
import UserFeedBack from '../UserFeedback/UserFeedBack';

const Layout2 = () => {
    const loader = useLoaderData()
    return (
        <main>
            <Header/>
            <ChefSection data={loader}/>
            <LatestRecipe/>
            <UserFeedBack/>      
        </main>
    );
};

export default Layout2;