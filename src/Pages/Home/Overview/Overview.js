import React from 'react';
import img1 from '../../../images/overview1.PNG'
import img2 from '../../../images/overview2.PNG'
import img3 from '../../../images/overview3.PNG'
import img4 from '../../../images/ovrview4.PNG'
import img5 from '../../../images/overview5.PNG'
import img6 from '../../../images/overview6.PNG'

const Overview = () => {
    return (
        <div className='mx-32 mt-20'>
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl pt-20 text-slate-700 special-font'>COMPANY OVERVIEW</h1>
                <p className='text-2xl lg:text-3xl mt-16 text-slate-400 special-font'>We can help you with everything from an oil change to an engine change.</p>
                <p className='text-2xl lg:text-3xl mt-2 text-slate-400 special-font'>We can handle any problem on both foreign and domestic vehicles.</p>
            </div>
            <div className="grid grid-cols-3 grid-rows-2 gap-10 mt-20">
                <div>
                    <div>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>CAR AUDIO SERVICE</h3>
                    </div>
                    <div className='flex'>
                        <img src={img1} alt="" className='h-3/6 mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>FREE OIL CHANGE</h3>
                    </div>
                    <div className='flex'>
                        <img src={img2} alt="" className='h-3/6  mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>ENGINE DIAGNOSTICS</h3>
                    </div>
                    <div className='flex'>
                        <img src={img3} alt="" className='h-3/6  mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>CAR A/C RECHARGE</h3>

                    </div>
                    <div className='flex'>
                        <img src={img4} alt="" className='h-3/6  mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>PARKING SENSORS CALIBRATION</h3>
                    </div>
                    <div className='flex'>
                        <img src={img5} alt="" className='h-3/6  mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
                <div>
                    <div className='flex'>
                        <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>CAR BATTERY REPAIRS</h3>
                    </div>
                    <div className='flex'>
                        <img src={img6} alt="" className='h-3/6 mr-7' />
                        <p className='lg:text-2xl text-slate-400 special-font'>
                            Services consequat luctus at justo auctor metus est donec. Tempus terminal morbi nulla donec elite maecenas modern forte elementum vehicula.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;