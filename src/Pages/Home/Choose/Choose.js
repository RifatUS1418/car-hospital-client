import React from 'react';
import choose1 from "../../../images/choose1.PNG"
import choose2 from "../../../images/choose2.PNG"
import choose3 from "../../../images/choose3.PNG"
const Choose = () => {
    return (
        <div className='p-20'>
            <div className='text-center'>
                <h1 className='text-4xl lg:text-6xl pt-20 text-slate-700 special-font'>WHY CHOOSE US?</h1>
                <p className='text-2xl lg:text-3xl mt-16 text-slate-400 special-font'>We are one of the leading auto repair shops serving customers in Tucson.</p>
                <p className='text-2xl lg:text-3xl text-slate-400 special-font'>
                    All mechanic services are performed by highly qualified mechanics.</p>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-3 gap-10 mt-20 pb-20'>
                <div className='text-center'>
                    <div className='grid justify-center'>
                        <img src={choose1} alt="" />
                    </div>
                    <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>EVERY JOB IS PERSONAL</h3>
                    <p className='lg:text-2xl text-slate-400 special-font'>If you want the quality you would expect from the dealership, but with a more personal and friendly atmosphere, you have found it.</p>
                </div>
                <div className='text-center'>
                    <div className='grid justify-center'>
                        <img src={choose2} alt="" />
                    </div>
                    <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>BEST MATERIALS</h3>
                    <p className='lg:text-2xl text-slate-400 special-font'>We have invested in all the latest specialist tools and diagnostic software that is specifically tailored for the software in your vehicle.</p>
                </div>
                <div className='text-center'>
                    <div className='grid justify-center'>
                        <img src={choose3} alt="" />
                    </div>
                    <h3 className='font-semibold lg:text-3xl pt-10 pb-10 text-slate-700 special-font'>PROFESSIONAL STANDARDS</h3>
                    <p className='lg:text-2xl text-slate-400 special-font'>Our auto repair shop is capable of servicing a variety of models. We only do the work that is needed to fix your problem.</p>
                </div>
            </div>
        </div>
    );
};

export default Choose;