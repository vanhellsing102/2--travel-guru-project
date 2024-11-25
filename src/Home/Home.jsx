import React, { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { FaArrowRight } from "react-icons/fa";
import Slider from '../Root/Slider';
import { Link } from 'react-router-dom';

const Home = () => {
    // const [travels, setTravels] = useState();
    return (
        <div>
            <Navbar></Navbar>
            <div className='grid md:grid-cols-3 grid-cols-1'>
                <div className='flex justify-center flex-col gap-3'>
                    <h1 className='text-5xl'>Cox's bazar</h1>
                    <p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                    <Link to={'/blog'}><button className='bg-[#F9A51A] btn w-32'>Booking <FaArrowRight></FaArrowRight></button></Link>
                </div>
                <div className='md:col-span-2 col-span-1'>
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;