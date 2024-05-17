import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdOutlineFoodBank } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

const Sidebar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }

    return (
        <div className='flex w-screen justify-between items-center bg-gray-900 py-3 shadow-2xl px-4'>
            <div className='flex items-center space-x-2'>
                <Link to='/'>
                    <img
                        src="https://res.cloudinary.com/dmrpovrmd/image/upload/v1711775838/logo_q1of0l.jpg"
                        loading='lazy'
                        alt="Love Kathi"
                        className='h-8' />
                    <h1 className='text-red-200 font-medium text-xl'>Love Kathi</h1>
                </Link>
            </div>
            <button
                className='bg-gray-700 bg-opacity-60 p-2 rounded-full text-xl'
                onClick={toggleDropdown}
            >
                <IoMenuOutline className='text-white' />
            </button>
            {isDropdownOpen && (
                <div className="absolute top-12 right-4 rounded-md shadow-2xl border border-gray-700 w-3/5 bg-gray-900 bg-opacity-80 p-2">
                    {/* Dropdown content goes here */}
                    <ul className='space-y-4 px-2'>
                        <li>
                            <Link onClick={closeDropdown} to="/" className="text-white space-x-2 font-bold text-sm text-md flex md:text-lg hover:text-red-400 active:text-red-400"><FaHome className='my-auto' /><span>Home</span> </Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/about" className="text-white space-x-2 font-bold text-sm  md:text-lg flex hover:text-red-400 active:text-red-400"><MdOutlineFoodBank className='my-auto' /><span>About</span></Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/menu" className="text-white space-x-2 font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto' /><span>Menu</span></Link>
                        </li>
                        <li>
                            <Link onClick={closeDropdown} to="/contact" className="text-white space-x-2 font-bold text-sm md:text-lg flex hover:text-red-400 active:text-red-400"><MdRestaurantMenu className='my-auto' /><span>Contact</span></Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
