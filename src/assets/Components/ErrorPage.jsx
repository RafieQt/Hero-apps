import React from 'react';
import { Link } from 'react-router';
import error from '../assets/error-404.png'

const ErrorPage = () => {
    return (
        <div className='text-center pb-20'>
            <img className='h-125 w-125 mx-auto pt-20 pb-4' src={error} alt="" />
            <h1 className='text-[#001931] text-center text-5xl mb-4'>Oops, page not found!</h1>
            <p className='text-[#627382] text-center mb-10'>The page you are looking for is not available.</p>
            <Link to='/'><button className='text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-4 py-3 w-36 rounded-sm hover:cursor-pointer font-semibold'>Go Back!!</button></Link>
        </div>
    );
};

export default ErrorPage;