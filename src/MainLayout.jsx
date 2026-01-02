import React from 'react';
import Navbar from './assets/Components/Navbar';
import { Outlet } from 'react-router';
import Footer from './assets/Components/Footer';

const MainLayout = () => {
    return (
        <div className='p-0 m-0'>
            <Navbar className='p-0 m-0'></Navbar>
            <Outlet>
                <main className="grow"></main>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;