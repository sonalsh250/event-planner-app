import React from 'react';

const Services = () => {
    return (
        <div style={{padding:'20px', fontFamily:'Arial,sans-seriff'}}>
            <h1 style={{textAlign:'center', color:'#16099D', marginBottom:'20px'}}>
                Our Services
            </h1>
            <p style={{fontSize:'18px', lineHeight:'1.6'}}>
                At SN Event Planners, we offer a wide range of services to make your events truly unforgettable.
            </p>
            <ul style={{fontSize:'16px', lineHeight:'1.8', marginTop:'15px'}}>
                <li>Birthday</li>
                <li>Wedding</li>
                <li>Engagement</li>
                <li>Anniversary</li>
                <li>Corporate</li>
                <li>Festival</li>
                <li>Other</li>
            </ul>
        </div>
    );
};
export default Services;