import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import review from '../assets/icon-review.png'
import { toast } from 'react-toastify';


const AppDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const [disabled, setDisabled] = useState(false);

    const handleClick = ()=>{
        toast.success("Download complete!");
        setDisabled(true);
    }

    const filterData = data.find((app) => app.id === Number(id));

    return (
        <div className='px-30'>
            <div className='flex flex-col md:flex-row gap-10 pt-20 pb-20'>
                <div>
                    <img className='md:w-87 md:h-87 w-100' src={filterData.image} alt="" />
                </div>
                <div className='w-full'>
                    <h1 className='text-4xl font-bold text-[#001931]'>{filterData.title}</h1>
                    <p>Developed by: {filterData.companyName}</p>
                    <hr className='border-black/30 my-7 border-0.5 w-full' />
                    <div className='flex items-center flex-row justify-center  md:justify-start gap-11'>
                        <div>
                            <img className='w-10 h-10 mx-auto md:start-0 ' src={download} alt="" />
                            <p className='text-[#627382] md:start-0 text-center'>Downloads</p>
                            <h3 className='text-3xl text-[#001931] font-bold  md:start-0 text-center'>{filterData.downloads}</h3>
                        </div>
                        <div>
                            <img className='w-10 h-10 mx-auto md:start-0 ' src={rating} alt="" />
                            <p className='text-[#627382] md:start-0 text-center'>Average Ratings</p>
                            <h3 className='text-3xl text-[#001931] font-bold md:start-0 text-center'>{filterData.ratingAvg}</h3>
                        </div>
                        <div>
                            <img className='w-10 h-10 mx-auto md:start-0 ' src={review} alt="" />
                            <p className='text-[#627382] md:start-0 text-center'>Total Reviews</p>
                            <h3 className='text-3xl text-[#001931] font-bold md:start-0 text-center'>{filterData.reviews}</h3>
                        </div>
                    </div>
                    <button disabled={disabled} onClick={handleClick} className={`btn bg-[#00D390] text-white px-3.5 py-5 w-59 h-12 mt-7.5 md:start-0 mx-auto ${disabled ? "bg-gray-500 cursor-not-allowed" : "bg-[#00D390]"}`}>Install Now ({filterData.size}MB)</button>
                </div>
            </div>
            <hr className='border-black/30 mb-10 border-0.5 w-full' />
            <div>
                <h3 className='text-2xl text-[#001931] font-semibold mb-6'>Rating</h3>
                <div className='mb-10'>
                    <BarChart
                        layout="vertical"
                        style={{
                            width: '100%',

                            maxHeight: '25vh',
                            aspectRatio: 1.618,
                        }}
                        responsive
                        data={filterData.ratings}

                    >
                        <XAxis
                            type="number"
                            axisLine={false}
                            tickLine={false}
                        />


                        <YAxis
                            type="category"
                            dataKey="name"
                            width={80}
                            axisLine={false}
                            tickLine={false}
                            reversed
                        />
                        <Bar dataKey="count" fill='#ff8811' />

                    </BarChart>
                </div>
                <hr className='border-black/30 mb-10 border-0.5 w-full' />
                <h1 className='text-2xl text-[#001931] font-semibold mb-6'>
                    Description
                </h1>
                <p className='text-[#627382] text-xl pb-20'>
                    {filterData.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;