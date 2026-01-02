import React from 'react';
import { HugeiconsIcon } from '@hugeicons/react'
import { Linkedin01Icon } from '@hugeicons/core-free-icons'
import { Facebook01Icon } from '@hugeicons/core-free-icons'
import { NewTwitterRectangleIcon } from '@hugeicons/core-free-icons'
import logo from '../assets/logo.png'    

const Footer = () => {
    return (
        <div className='bg-[#001931] py-5 w-full'>
            <footer className="footer sm:footer-horizontal  text-neutral-content py-4 flex justify-between px-20">
                <div>
                    <div className='flex gap-2'>
                        <img className='h-8 w-8' src={logo} alt="" />
                        <h3 className='text-white text-xl'>HERO.IO</h3>
                    </div>
                </div>
                <div>
                    <h6 className="text-white text-xl">Social Links</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <HugeiconsIcon icon={Linkedin01Icon} />
                        </a>
                        <a>
                            <HugeiconsIcon icon={Facebook01Icon} />
                        </a>
                        <a>
                            <HugeiconsIcon icon={NewTwitterRectangleIcon} />
                        </a>
                    </div>
                </div>
            </footer>
            <hr className='border-white/30 my-3 border-0.5 w-[70%] mx-auto' />
            <p className='text-white/50 text-center pt-2 text-xs '>Copyright © 2025 - All right reserved</p>
        </div>
    );
};

export default Footer;