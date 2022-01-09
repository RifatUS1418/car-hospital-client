import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { img, name, service_Over_View, axel, front_brakes, rear_brakes, starters } = service;

    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    return (
        <div>
            <div className='heading-background py-14'>
                <h1 className='mx-32 text-4xl'>{name}</h1>
            </div>
            <div>
                <div>
                    {/* appoingment */}
                </div>
                <div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                    <div className='heading-container'>
                        <h1 className='mt-20 text-4xl heading-style'>SERVICE OVERVIEW</h1>
                        <p className='regular-para'>{service_Over_View}</p>
                        <h1 className='mt-20 text-4xl heading-style'>PRICING</h1>
                        <div className='w-full'>
                            <table className='w-9/12'>
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
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;