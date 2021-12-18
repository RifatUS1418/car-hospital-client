import React from 'react';
import footer1 from '../../../images/footerlogo1.PNG'
import footer2 from '../../../images/footerlogo2.PNG'
import footer3 from '../../../images/footerlogo3.PNG'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import {
    FaLinkedinIn
} from 'react-icons/fa';
import {
    AiOutlineTwitter,
} from 'react-icons/ai';
import {
    GrFacebookOption,
} from 'react-icons/gr';
import {
    RiPinterestFill,
} from 'react-icons/ri';

const Footer = () => {

    const element = <FontAwesomeIcon icon={faCheck} className='check-sign' />
    return (
        <div className='background-footer pb-16'>
            <div className='flex justify-between justify-center px-32 py-12'>
                <div className="flex items-center">
                    <div>
                        <img src={footer1} alt="" />
                    </div>
                    <div className='text-4xl text-white pl-6'>
                        <h1 className='leading-normal text-footer'>Tucson, AZ 80210:<br />501 Archwood Lane</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <img src={footer2} alt="" />
                    </div>
                    <div className='text-4xl text-white subpixel-antialiased pl-6'>
                        <h1 className='leading-normal text-footer'>Feel Free to Call Us Now<br />(+880)1639 056712</h1>
                    </div>
                </div>
                <div className="flex items-center">
                    <div>
                        <img src={footer3} alt="" />
                    </div>
                    <div className='text-4xl text-white subpixel-antialiased pl-6'>
                        <h1 className='leading-normal text-footer'>24/7 Roadside Assistance<br />(+880)1639 056712</h1>
                    </div>
                </div>

            </div>
            <div className='line px-20'>
                <hr />
            </div>
            <div className='px-32 flex justify-between pt-10'>
                <div className='text-white text-2xl footer-small-text'>
                    <p className='font-bold py-10'>ABOUT US</p>
                    <p className='pb-3'>Tucson, Arizona 80210</p>
                    <p className='pb-3'>501 Archwood Lane</p>
                    <div className='flex justify-between pb-3'>
                        <p>Mobile:(520)</p>
                        <p>577 2710</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                        <p>Assistance:</p>
                        <p>577 2710</p>
                    </div>
                    <div className='flex justify-between pb-3'>
                        <p>E-mail:</p>
                        <p>carhospita@mail.com</p>
                    </div>
                    <div className='flex justify-center text-2xl w-full text-center mt-10'>
                        <div className='p-6 footer-icon text-slate-400 mr-1'>
                            <GrFacebookOption></GrFacebookOption>
                        </div>
                        <div className='p-6 footer-icon text-slate-400 mr-1'>
                            <AiOutlineTwitter></AiOutlineTwitter>
                        </div>
                        <div className='p-6 footer-icon text-slate-400 mr-1'>
                            <FaLinkedinIn></FaLinkedinIn>
                        </div>
                        <div className='p-6 footer-icon text-slate-400'>
                            <RiPinterestFill></RiPinterestFill>
                        </div>
                    </div>
                </div>

                <div className='text-white text-2xl footer-small-text'>
                    <p className='font-bold py-10'>OUR SERVICES</p>
                    <p className='pb-3'>{element} Engine Diagnostics</p>
                    <p className='pb-3'>{element} Lube, Oil and Filters</p>
                    <p className='pb-3'>{element} Belts and Hoses</p>
                    <p className='pb-3'>{element} Air Conditioning</p>
                    <p className='pb-3'>{element} Break Repair</p>
                    <p className='pb-3'>{element} Tire and Wheel Service</p>
                    <p className='pb-3'>{element} Other Car Services</p>
                </div>
                <div className='text-white'>
                    <p className='font-bold text-2xl py-10'>POPULAR TAGS</p>
                    <div className='grid grid-cols-3 gap-2 col-start-1 button-col'>
                        <div>
                            <p className='text-lg p-5 footer-button'>BELTS</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>BRAKES</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>DIAGNOSTICS</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>ENGINE</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>FILTERS</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>HEATING</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>OILS</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>STEERINGS</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>SUSPENSION</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>TIRES</p>
                        </div>
                        <div>
                            <p className='text-lg p-5 footer-button'>TRANSMISSION</p>
                        </div>
                    </div>
                </div>
                <div className='text-white text-2xl'>
                    <p className='font-bold text-2xl py-10'>POPULAR TAGS</p>
                    <div>
                        <div className='flex justify-between pb-3'>
                            <p>Monday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Tuesday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Wednesday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Thursday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Friday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Saturday:</p>
                            <p>7:30am - 5:30pm</p>
                        </div>
                        <div className='flex justify-between pb-3'>
                            <p>Sunday:</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;