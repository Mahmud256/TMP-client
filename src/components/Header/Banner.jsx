import React from 'react';
import banner from '../../assets/tmp-back.png'

const Banner = () => {
    return (
        <div>
            <div className="relative h-auto bg-center bg-no-repeat">
                <div className="">
                    <img src={banner} alt=""  />
                </div>
            </div>
        </div>
    );
};

export default Banner;