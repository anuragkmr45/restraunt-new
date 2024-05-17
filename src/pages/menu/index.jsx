import React, { useEffect, useState } from 'react';
import useSmoothScroll from '../../hooks/general/useSmoothScroll';

import MenuCard from '../../components/cards/menu-card';

import { starters, rolls, chinese, soup, rotiParathaRice, vegMainCourse, nonvegMainCourse, briyani, thali } from '../../.data/dishes'
import image22 from '../../img/img21.jpg';

const Menu = () => {
    useSmoothScroll();

    const [selectTab, setSelectTab] = useState('starters');
    const [snaks, setSnakes] = useState([]);
    const [mainCourse, setMainCourse] = useState([]);

    useEffect(() => {
        const snakesNRollsNChiniese = [...starters[0], ...starters[1], ...rolls, ...chinese]
        setSnakes(snakesNRollsNChiniese)

        const vegNnonVegMaincourse = [...vegMainCourse, ...nonvegMainCourse]
        setMainCourse(vegNnonVegMaincourse)
    }, [])

    return (
        <main className='bg-red-950'>
            <img src={image22} alt="love kathi" />
            <div className='relative bottom-40'>
                <section className='sticky top-14 py-6 md:px-5 bg-opacity-95 bg-gray-900 md:bg-inherit'>
                    <div className="flex lg:grid lg:grid-cols-6 gap-4 overflow-scroll lg:overflow-hidden ">
                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'starters' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('starters') }}>
                            <p className='text-center' >
                                Rolls & Snaks
                            </p>
                        </button>

                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'soups' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('soups') }}>
                            <p className='text-center'>
                                Soups
                            </p>
                        </button>

                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'rotiParathaRice' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('rotiParathaRice') }}>
                            <p className='text-center'>
                                Roti Paratha & Rice
                            </p>
                        </button>

                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'maincourse' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('maincourse') }}>
                            <p className='text-center'>
                                Main Course
                            </p>
                        </button>

                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'briyani' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('briyani') }}>
                            <p className='text-center'>
                                Briyanis
                            </p>
                        </button>

                        <button className={`text-white  px-5 md:py-3 rounded-lg hover:text-white hover:bg-gray-950 shadow-lg duration-300 transition-all min-w-28 ${selectTab === 'thali' ? 'bg-red-950' : 'bg-gray-700'} `} onClick={() => { setSelectTab('thali') }}>
                            <p className='text-center' >
                                Thalis
                            </p>
                        </button>
                    </div>
                    <div className='border border-gray-400' />
                </section>

                <section className="md:mx-10 mt-40 md:mt-10 bg-opacity-55">
                    <div className='md:bg-gray-800 sm:p-10 rounded-lg px-2' >
                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'starters' && (
                                    snaks?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>

                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'soups' && (
                                    soup?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>

                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'rotiParathaRice' && (
                                    rotiParathaRice?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>

                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'maincourse' && (
                                    mainCourse?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>

                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'briyani' && (
                                    briyani?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>

                        <aside className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                            {
                                selectTab === 'thali' && (
                                    thali?.map((data, index) => {
                                        return (
                                            <MenuCard key={index} veg={data.veg} price={data.price} title={data.dish} />
                                        )
                                    })
                                )
                            }
                        </aside>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default Menu
