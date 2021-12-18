import React from 'react';
import engine from '../../../images/engine (1).jpg'
import oil from '../../../images/oil.jpg'
import belt from '../../../images/belt.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './AutoRepair.css'

const AutoRepair = () => {
    const element = <FontAwesomeIcon icon={faChevronRight} className='lg:text-4xl text-sky-600' />
    return (
        <div className="mx-32 my-32">
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl text-slate-700 special-font'>AUTO REPAIR SERVICES</h1>
                <p className='text-2xl lg:text-3xl mt-16 text-slate-400 special-font'>We offer a full range of garage services to vehicle owners located in Tucson area.</p>
                <p className='text-2xl lg:text-3xl text-slate-400 special-font mt-2'>Our professinals know how to handle a wide range of car services.</p>
            </div>
            <div className='mt-16 flex'>
                <div>
                    <img src={engine} alt="" className="image-effect" />
                    <div className='bg-slate-100 flex items-center justify-between text-effect'>
                        <p className='font-semibold lg:text-3xl py-8 px-5 text-slate-700 special-font'>ENGINE DIAGNOSTICS</p>
                        <p className=' pr-5'>{element}</p>
                    </div>
                </div>
                <div>
                    <img src={oil} alt="" className="image-effect" />
                    <div className='bg-slate-100 flex items-center justify-between text-effect'>
                        <p className='font-semibold lg:text-3xl py-8 px-5 text-slate-700 special-font'>LUBE, OIL AND FILTERS</p>
                        <p className=' pr-5'>{element}</p>
                    </div>
                </div>
                <div>
                    <img src={belt} alt="" className="image-effect" />
                    <div className='bg-slate-100 flex items-center justify-between text-effect'>
                        <p className='font-semibold lg:text-3xl py-8 px-5 text-slate-700 special-font'>BELTS AND HOSES</p>
                        <p className=' pr-5'>{element}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoRepair;