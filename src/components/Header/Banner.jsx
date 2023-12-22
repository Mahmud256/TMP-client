import React from 'react';
import banner from '../../assets/tmp-back.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="relative h-auto bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center h-full">
                <img src={banner} alt="" />
                <Link to={`/dashboard`}>
                    <button className='absolute btn left-[11rem] lg:left-[38rem] bottom-3 text-white bg-red-500 hover:bg-red-400'>Let’s Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
