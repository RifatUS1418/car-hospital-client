import React from 'react';
import './Review.css';

const Review = () => {
    return (
        <div className='review-background flex items-center justify-center'>
            <div>
                <p className='lg:text-4xl text-white text-center review-text pb-5'><i className='special-font'>"I have taken several of the family cars here for the past several years and without</i></p>
                <p className='lg:text-4xl text-white text-center review-text  pb-5'><i className='special-font'>exception the experiences have been outstanding. I would highly recommend this place</i></p>
                <p className='lg:text-4xl text-white text-center review-text  pb-5'><i className='special-font'>to any one who wants great service, honest value, and really great people."</i></p>
            </div>
        </div>
    );
};

export default Review;