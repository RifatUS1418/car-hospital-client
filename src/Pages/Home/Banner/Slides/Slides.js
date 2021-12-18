import React from 'react';
import { IMAGES } from '../../mock';
import './Slides.css'
const Slides = () => (
    <div>
        {IMAGES.map((image, index) =>
            <img key={index} src={image.imageUrl} alt={image.placeHolder} />)
        }
    </div>
);

export default Slides;