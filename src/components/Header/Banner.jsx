import React from 'react';
import img1 from '../../assets/tmp-back1.png';
import img2 from '../../assets/tmp-back2.png';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    const images = [img1, img2];
    return (
        <div className="relative h-auto bg-center bg-no-repeat">
            <div className="flex flex-col items-center justify-center h-full">
                <Carousel autoPlay interval={5000} showThumbs={false} showArrows={true} infiniteLoop>
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt="" />
                        </div>
                    ))}
                </Carousel>
                <Link to={`/dashboard`}>
                    <button className='absolute btn left-[1rem] lg:left-[20rem] bottom-3 text-white bg-red-500 hover:bg-red-400'>Let’s Explore</button>
                </Link>
            </div>
        </div>
    );
};

export default Banner;
