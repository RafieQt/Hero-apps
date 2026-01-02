import React from 'react';
import google from '../assets/google.png'
import apple from '../assets/apple.png'
import hero from '../assets/hero.png'
import { Link, useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';


const Home = () => {
    const data = useLoaderData();
    return (
        <div className='bg-[#f5f5f5]'>
            <h1 className='text-center text-7xl text-[#001931] font-bold pt-20 pb-4'>We Build<br /><span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
            <p className='text-[#627382] text-xl text-center'>
                At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.<br />Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='flex items-center justify-center gap-4 my-10'>
                <button className='text-center hover:cursor-pointer text-xl font-semibold border border-[#d2d2d2] rounded-md p-4 h-14 w-50 py-1 '><img src={google} className='w-7 h-7 inline' alt="" /> Google Play</button>
                <button className='text-center hover:cursor-pointer text-xl font-semibold border border-[#d2d2d2] rounded-md p-4 h-14 w-50 py-1 '><img src={apple} className='w-7 h-7 inline' alt="" /> App Store</button>
            </div>
            <img className='mx-auto' src={hero} alt="" />
            <div className='w-full h-100 bg-linear-to-r from-[#632ee3] via-[#8148eb] to-[#9f62f2] mb-20'>
                <h3 className='text-white font-bold text-4xl text-center pt-18 pb-10'>Trusted by Millions, Built for You</h3>
                <div className=' flex justify-around'>
                    <div>
                        <p className='text-white/80 text-center'>Total Downloads</p>
                        <h3 className='text-6xl font-extrabold text-white text-center my-4'>29.6M</h3>
                        <p className='text-white/80 text-center'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-white/80 text-center'>Total Reviews</p>
                        <h3 className='text-6xl font-extrabold text-white text-center my-4'>906K</h3>
                        <p className='text-white/80 text-center'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-white/80 text-center'>Active Apps</p>
                        <h3 className='text-6xl font-extrabold text-white text-center my-4'>132+</h3>
                        <p className='text-white/80 text-center'>31 more will Launch</p>
                    </div>
                </div>
            </div>
            <h3 className='text-[#001931] text-center text-5xl mb-4'>Trending Apps</h3>
            <p className='text-[#627382] text-center mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='pb-10'>
                <div className='mx-auto grid grid-cols-4 gap-2 container'>
                    {data.slice(0, 8).map(app => <AppCard app={app}></AppCard>)}
                </div>
            </div>
            <div className='mx-auto text-center pb-20'>

                <Link to='/Applications'>
                    <button className='text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-4 py-3 w-36 rounded-sm hover:cursor-pointer font-semibold'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;