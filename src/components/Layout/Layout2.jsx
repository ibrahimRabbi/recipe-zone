import React from 'react';
import Header from '../Header/Header';
import ChefSection from '../Chef/ChefSection';
import LatestRecipe from '../LatestRecipe/LatestRecipe';
import UserFeedBack from '../UserFeedback/UserFeedBack';

const Layout2 = () => {
    
    return (
        <main>
            <Header/>
            <ChefSection/>
            <LatestRecipe/>
            <UserFeedBack/>      
        </main>
    );
};

export default Layout2;