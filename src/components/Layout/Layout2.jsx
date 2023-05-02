import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ChefSection from '../Chef/ChefSection';
import LatestRecipe from '../LatestRecipe/LatestRecipe';
import UserFeedBack from '../UserFeedback/UserFeedBack';

const Layout2 = () => {
    const loader = useLoaderData()
    return (
        <div>
            <Header/>
            <ChefSection data={loader} />
            <LatestRecipe />
            <UserFeedBack/>
            <Footer/>
        </div>
    );
};

export default Layout2;