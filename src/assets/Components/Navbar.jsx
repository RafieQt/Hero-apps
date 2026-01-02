import React from 'react';
import logo from '../assets/logo.png'
import git from '../assets/gith.png'
import { Link } from 'react-router';


const Navbar = () => {
    return (
        <div className=''>
            <div className="navbar bg-base-100 shadow-sm mx-0 max-w-full md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li>
                                <a>Apps</a>
                            </li>
                            <li><a>Installation</a></li>
                        </ul>
                    </div>
                    <Link className='flex gap-2' to='/'>
                        <img src={logo} className='h-8 p-0 m-0' alt="" />
                        <a className="text-xl p-0 m-0 bg-linear-to-br from-[#632EE3] via-[#8148EB] to-[#9F62F2] bg-clip-text text-transparent">HERO.IO</a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li>
                            <Link to='Applications'>Apps</Link>
                        </li>
                        <li><a>Installation</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white"> <img src={git} alt="" />Contribution</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;