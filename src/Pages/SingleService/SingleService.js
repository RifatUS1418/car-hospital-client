import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { _id, img, name } = service;
    console.log(service);
    const element = <FontAwesomeIcon icon={faChevronRight} className='lg:text-4xl text-sky-600' />
    return (
        <div>
            <img src={img} alt="" className="image-effect" />
            <NavLink to={`/details/${_id}`}>
                <div className='bg-slate-100 flex items-center justify-between text-effect'>
                    <p className='font-semibold lg:text-3xl py-8 px-5 text-slate-700 special-font'>{name}</p>
                    <p className=' pr-5'>{element}</p>
                </div>
            </NavLink>
        </div>
    );
};

export default SingleService;