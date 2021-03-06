import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import "./Services.css"

const Services = () => {
    const[services,setServices]= useState([]);
    
    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    
    
    return (
        <div id='services'>
            <h1 className='text-info my-5 middle'>Our Services</h1>
            <div className='service-container mt-3'>
            {
                services.map(service=> <Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
        </div>
            
    );
};

export default Services;