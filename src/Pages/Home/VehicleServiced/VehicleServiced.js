import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import servicedVehicle from '../../../images/vehicle-serviced.jpg'
import './VehicleServiced.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons'


const VehicleServiced = () => {
    const element = <FontAwesomeIcon className='text-blue-700' icon={faCheck} />
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className="service-img basis-1/2">
                <img src={servicedVehicle} alt="" className='w-full' />
            </div>
            <div className="service-list basis-1/2 text-center p-8 lg:pl-20 bg-slate-50">
                <h2 className='text-4xl lg:text-6xl pt-20 text-slate-700 special-font'>VEHICLES SERVICED</h2>
                <p className='text-2xl lg:text-3xl mt-16 text-slate-400 special-font'>We provide top notch maintenance service for all types of vehicles.</p>
                <p className='text-2xl lg:text-3xl text-slate-400 font-thin special-font'>We are certified to service and repair the following makes:</p>
                <div className='grid grid-flow-col grid-rows-1 gap-8 mt-10 text-slate-400 special-font'>
                    <div>
                        <ul className='lg:text-2xl text-left'>
                            <li className='pb-1'>{element} General Motors</li>
                            <li className='pb-1'>{element} Land Rover</li>
                            <li className='pb-1'>{element} Lexus</li>
                            <li className='pb-1'>{element} Lincoln</li>
                            <li className='pb-1'>{element} Mazda</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='lg:text-2xl text-left'>
                            <li className='pb-1'>{element} Mercedes-Benz</li>
                            <li className='pb-1'>{element} Mercury</li>
                            <li className='pb-1'>{element} Mitsubishi</li>
                            <li className='pb-1'>{element} Nissan</li>
                            <li className='pb-1'>{element} Renault</li>
                        </ul>
                    </div>
                    <div>
                        <ul className='lg:text-2xl text-left'>
                            <li className='pb-1'>{element} Plymouth</li>
                            <li className='pb-1'>{element} Pontiac Porsche</li>
                            <li className='pb-1'>{element} Rover</li>
                            <li className='pb-1'>{element} Saad</li>
                            <li className='pb-1'>{element} Saleen</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleServiced;