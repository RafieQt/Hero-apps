import React from 'react';
import Navbar from './assets/Components/Navbar';
import ErrorPage from './assets/Components/ErrorPage';
import Footer from './assets/Components/Footer';

const ErrorLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    );
};

export default ErrorLayout;