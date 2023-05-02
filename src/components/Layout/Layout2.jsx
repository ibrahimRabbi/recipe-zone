import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';
import ChefSection from '../Chef/ChefSection';

const Layout2 = () => {
    const loader = useLoaderData()
    return (
        <div>
            <Header/>
            <ChefSection data={loader} />
            <Footer/>
        </div>
    );
};

export default Layout2;