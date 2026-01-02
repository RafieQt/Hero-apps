import React from 'react';
import down from '../assets/icon-downloads.png'
import rate from '../assets/icon-ratings.png'


const AppCard = ({app}) => {
    return (
        <div>
            <div className='p-4 w-87 h-fit rounded-xl bg-white hover:cursor-pointer'>
                <img className='rounded-xl h-79 w-full mx-auto' src={app.image} alt="" />
                <p className='text-xl text-[#001931] font-medium pb-4 pt-4'>{app.title}</p>
                <div className='flex justify-between '>
                    <div className='bg-[#f1f5e8] rounded-md w-fit'>
                        <div className='flex gap-0.5 px-2.5 py-1 items-center'>
                            <img className='h-4 w-4' src={down} alt="" />
                            <p className='text-[#00d390]'>{app.downloads}</p>
                        </div>
                    </div>
                    <div className='bg-[#fff0e1] rounded-md w-fit'>
                        <div className='flex gap-0.5 px-2.5 py-1 items-center'>
                            <img className='h-4 w-4' src={rate} alt="" />
                            <p className='text-[#ff8811]'>{app.ratingAvg}</p>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default AppCard;