import React, { useEffect, useState } from 'react';
import SingleService from '../SingleService/SingleService';
import './ServicesCollection.css';

const ServicesCollection = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='heading-background py-20'>
                <h1 className='mx-32 text-4xl'>OUR SERVICES</h1>
            </div>
            <div className='mx-36 my-16 grid grid-row-2 grid-cols-3 gap-x-0 gap-y-10 '>
                {
                    services.map(service => <SingleService
                        key={service._id}
                        service={service}
                    ></SingleService>)
                }
            </div>
        </div>
    );
};

export default ServicesCollection;