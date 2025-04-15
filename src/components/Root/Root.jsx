import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Header />
            
            <Footer />
            
        </div>
    );
};

export default Root;