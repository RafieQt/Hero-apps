import React, { useState } from 'react';
import {useLoaderData } from 'react-router';
import AppCard from '../Components/AppCard';
import appFound from '../assets/App-Error.png'

const Applications = () => {
    const data = useLoaderData();
    const [apps, setApps] = useState(data);

    const HandleSearch = (e) => {
        const textSearch = e.target.value;
        const result = data.filter((item) => item.title.toLowerCase().includes(textSearch.toLowerCase()));
        setApps(result);
    }

    return (
        <div className='bg-[#f5f5f5] pb-20'>

            {
                apps.length === 0 ? (
                    <div className='text-center'>
                        <img className='mx-auto mb-6 pt-10' src={appFound} alt="" />
                        <h3 className='text-[#001931] text-center text-5xl mb-4'>OPPS!! APP NOT FOUND</h3>
                        <p className='text-[#627382] text-center mb-6'>The App you are requesting is not found on our system.  please try another apps</p>

                        <button onClick={()=>setApps(data)} className='text-white bg-linear-to-r from-[#632ee3] to-[#9f62f2] px-4 py-3 w-36 rounded-sm hover:cursor-pointer font-semibold'>Go Back!</button>

                    </div>
                ) : (
                    <div>
                        <div>
                            <h3 className='text-[#001931] text-center text-5xl font-bold pt-20 pb-4'>Our All Applications</h3>
                            <p className='text-[#627382] text-center text-xl pb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
                        </div>
                        <div className='w-[75%] mx-auto'>
                            <div className='flex justify-between pb-4'>
                                <h5 className='text-[#001931] text-2xl font-semibold '>({apps.length}) Apps Found</h5>
                                <input onChange={HandleSearch} type="search" name="" className='w-100 text-[#627382] border-[#d2d2d2] border rounded-r-sm' placeholder=' Search Apps' id="" />
                            </div>
                            <div className='grid grid-cols-4 container mx-auto gap-2'>
                                {apps.map(app => <AppCard app={app}></AppCard>)}
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    );
};

export default Applications;