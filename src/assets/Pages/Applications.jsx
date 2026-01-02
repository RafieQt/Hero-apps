import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';

const Applications = () => {
    const data = useLoaderData();
    return (
        <div className='bg-[#f5f5f5] pb-20'>
            <div>
                <h3 className='text-[#001931] text-center text-5xl font-bold pt-20 pb-4'>Our All Applications</h3>
                <p className='text-[#627382] text-center text-xl pb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='w-[75%] mx-auto'>
                <div className='flex justify-between pb-4'>
                    <h5 className='text-[#001931] text-2xl font-semibold '>(18) Apps Found</h5>
                    <input type="search" name="" className='w-100 text-[#627382] border-[#d2d2d2] border rounded-r-sm' placeholder=' Search Apps' id="" />
                </div>
                <div className='grid grid-cols-4 container mx-auto gap-2'>
                    {data.map(app => <AppCard app={app}></AppCard>)}
                </div>
            </div>
        </div>
    );
};

export default Applications;