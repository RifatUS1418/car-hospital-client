import React from 'react';
import tire from '../../../images/tire (1).jpg';
import oil from '../../../images/oil.jpg';
import lube from '../../../images/lube.jpg';
import wheel from '../../../images/break.jpg';
import './Services.css';

const Services = () => {
    return (
        <div className='flex my-32'>
            <div className='holder'>
                <img src={tire} alt="" />
                <div className="container">
                    <div className="content">
                        <div className="effect">
                            <p className='text-2xl lg:text-3xl text-white special-font'>Tire Change</p>
                            <button className='special-button lg:text-2xl'>View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='holder'>
                <img src={oil} alt="" />
                <div className="container">
                    <div className="content">
                        <div className="effect">
                            <p className='text-2xl lg:text-3xl text-white special-font'>Oil Change</p>
                            <button className='special-button lg:text-2xl'>View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='holder'>
                <img src={lube} alt="" />
                <div className="container">
                    <div className="content">
                        <div className="effect">
                            <p className='text-2xl lg:text-3xl text-white special-font'>Lube Service</p>
                            <button className='special-button lg:text-2xl'>View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='holder'>
                <img src={wheel} alt="" />
                <div className="container">
                    <div className="content">
                        <div className="effect">
                            <p className='text-2xl lg:text-3xl text-white special-font'>Break Repair</p>
                            <button className='special-button lg:text-2xl'>View Detail</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;