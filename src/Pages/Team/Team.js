import React from 'react';
import member1 from '../../images/team1.png'
import member2 from '../../images/team2.png'
import member3 from '../../images/team3.png'
import './Team.css'
import {
    FaLinkedinIn
} from 'react-icons/fa';
import {
    AiOutlineTwitter,
} from 'react-icons/ai';
import {
    GrFacebookOption,
} from 'react-icons/gr';

const Team = () => {
    return (
        <div>
            <div className='m-40 flex'>
                <div className='text-center member-container'>
                    <div className='relative'>
                        <img src={member1} alt="" className='member-img' />
                        <div className='flex justify-center text-2xl absolute w-full text-center icon'>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <GrFacebookOption></GrFacebookOption>
                            </div>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                            <div className='p-6 bg-white text-slate-400 media-logo'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl text-gray-700 subpixel-antialiased mt-10">MARK WHILBERG</h1>
                    <p className='text-lg text-gray-400 mt-8'>CO-FOUNDER</p>
                    <p className='text-2xl text-gray-500 mt-20'>Primus elite lectus tical at node. Porta commodo <br /> terminal forks sande. Nulla novum at novelle.</p>
                </div>
                <div className='text-center member-container'>
                    <div className='relative'>
                        <img src={member2} alt="" className='member-img' />
                        <div className='flex justify-center text-2xl absolute w-full text-center icon'>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <GrFacebookOption></GrFacebookOption>
                            </div>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                            <div className='p-6 bg-white text-slate-400 media-logo'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl text-gray-700 subpixel-antialiased mt-10">MARK WHILBERG</h1>
                    <p className='text-lg text-gray-400 mt-8'>CO-FOUNDER</p>
                    <p className='text-2xl text-gray-500 mt-20'>Primus elite lectus tical at node. Porta commodo <br /> terminal forks sande. Nulla novum at novelle.</p>
                </div>
                <div className='text-center member-container'>
                    <div className='relative'>
                        <img src={member3} alt="" className='member-img' />
                        <div className='flex justify-center text-2xl absolute w-full text-center icon'>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <GrFacebookOption></GrFacebookOption>
                            </div>
                            <div className='p-6 bg-white text-slate-400 mr-px media-logo'>
                                <AiOutlineTwitter></AiOutlineTwitter>
                            </div>
                            <div className='p-6 bg-white text-slate-400 media-logo'>
                                <FaLinkedinIn></FaLinkedinIn>
                            </div>
                        </div>
                    </div>
                    <h1 className="text-3xl text-gray-700 subpixel-antialiased mt-10">MARK WHILBERG</h1>
                    <p className='text-lg text-gray-400 mt-8'>CO-FOUNDER</p>
                    <p className='text-2xl text-gray-500 mt-20'>Primus elite lectus tical at node. Porta commodo <br /> terminal forks sande. Nulla novum at novelle.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Team;