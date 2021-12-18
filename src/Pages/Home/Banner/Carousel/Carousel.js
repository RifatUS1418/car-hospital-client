import React, { useEffect } from 'react';
import DotIcon from '../Doticon/DotIcon';
import Thumbnail from '../Thumbnail/Thumbnail';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar } from '@fortawesome/free-solid-svg-icons'

const Carousel = ({ children, time }) => {
    const [index, setIndex] = React.useState(0);
    const keys = children.map((child, index) => index);

    useEffect(() => {
        const interval = setInterval(() => {
            const newIndex = (index + 1) % keys.length;
            setIndex(newIndex);
        }, time);
        return () => clearInterval(interval);
    });

    const _slides = () => {
        return children.map((child, idx) => (
            <Thumbnail key={idx} id={idx} selectedKey={index}>
                {child}
            </Thumbnail>
        ));
    }

    const _sliderDots = () => {
        return keys.map(key => (
            <span key={key} onClick={() => setIndex(key)}>
                {<DotIcon selected={key === index} />}
            </span>
        ));
    }
    const element = <FontAwesomeIcon icon={faCar} />
    return (
        <div className='banner-container relative'>
            <h1 className='text-9xl absolute banner-logo text-blue-600 subpixel-antialiased'>{element}</h1>
            <h1 className='text-7xl font-bold text-white absolute banner-text subpixel-antialiased'>MAKE YOUR CAR LAST LONGER</h1>
            <p className='absolute lg:text-4xl mt-5 text-white banner-para special-font subpixel-antialiased'>Take advantage of our lowest price which automatically include cupoens</p>
            <div className="border-gray-100 h-4/5 m-auto flex justify-center brightness">
                <div className="grid grid-flow-row auto-rows-max">
                    <div className="min-h-100">
                        {_slides()}
                    </div>
                    <div className="flex justify-center mt-2">
                        {_sliderDots()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;