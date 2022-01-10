import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [appoinment, setAppoinment] = useState({});
    const [insertId, setInsertId] = useState({});
    const { img, name, service_Over_View, axel, front_brakes, rear_brakes, starters } = service;
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://quiet-hollows-16436.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newAppoinment = { ...appoinment };
        newAppoinment[field] = value;
        console.log(newAppoinment);
        setAppoinment(newAppoinment);
    }

    const handleAppoinment = e => {
        e.preventDefault();
        fetch('https://quiet-hollows-16436.herokuapp.com/appoinment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(appoinment)
        })
            .then(res => res.json())
            .then(data => setInsertId(data))
    }
    return (
        <div>
            <div className='heading-background py-14'>
                <h1 className='mx-32 text-4xl'>{name}</h1>
            </div>
            <div className='flex'>
                <div className='w-1/4'>
                    <form onSubmit={handleAppoinment} className="mt-20">
                        <div className='flex justify-center mb-5'>
                            <input type="text"
                                name="name"
                                className="mt-1 block w-9/12 border p-5 text-2xl page-text"
                                placeholder='Your Name*'
                                defaultValue={user.name}
                                onBlur={handleOnBlur} />
                        </div>
                        <div className='flex justify-center mb-5'>
                            <input type="email"
                                name="email"
                                className="mt-1 block w-9/12 border p-5 text-2xl page-text"
                                placeholder='Your Email*'
                                defaultValue={user.email}
                                onBlur={handleOnBlur} />
                        </div>
                        <div className='flex justify-center mb-5'>
                            <input type="text"
                                name="service_name"
                                className="mt-1 block w-9/12 border p-5 text-2xl page-text"
                                placeholder='Service Name*'
                                defaultValue={name}
                                onBlur={handleOnBlur} />
                        </div>
                        <div className='flex justify-center'>
                            <button className='page-text text-2xl font-semibold page-button px-10 py-5 text-white w-9/12 mb-5' type="submit">Take Your Appoinment</button>
                        </div>
                        {insertId.insertedId && <div className='flex justify-center'>
                            <p className='text-2xl' style={{ color: "green" }}>Appoinment taken successfully</p>
                        </div>}
                    </form>
                </div>
                <div className='w-3/4 pr-24'>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='heading-container'>
                        <h1 className='mt-20 text-4xl heading-style'>SERVICE OVERVIEW</h1>
                        <p className='regular-para'>{service_Over_View}</p>
                        <h1 className='mt-20 text-4xl heading-style'>PRICING</h1>
                        <div className='w-full'>
                            <table className='w-full'>
                                <tbody>
                                    <tr className='regular-background'>
                                        <td className='regular-para table-border text-right'>Front Breaks Repair</td>
                                        <td className='regular-para text-left'>{front_brakes}</td>
                                    </tr>
                                    <tr>
                                        <td className='regular-para table-border text-right'>Rear Brakes Repair</td>
                                        <td className='regular-para text-left'>{rear_brakes}</td>
                                    </tr>
                                    <tr className='regular-background'>
                                        <td className='regular-para table-border text-right'>Rear Brakes Shoes</td>
                                        <td className='regular-para text-left'>$65.25</td>
                                    </tr>
                                    <tr>
                                        <td className='regular-para table-border text-right'>Axle</td>
                                        <td className='regular-para text-left'>{axel}</td>
                                    </tr>
                                    <tr className='regular-background'>
                                        <td className='regular-para table-border text-right'>Starters/Alternators</td>
                                        <td className='regular-para text-left'>{starters}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;