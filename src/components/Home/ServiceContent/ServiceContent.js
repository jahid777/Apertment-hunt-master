import React from 'react';

const ServiceContent = (props) => {

    const {img,title,description} = props.service;
    return (
        <div className="col-md-4">
            <div className="text-center">
            <img src={img} alt="" style={{height: '80px', width: '80px'}}/>
            <h3>{title}</h3>
            <p>{description}</p>
            </div>
        </div>
    );
};

export default ServiceContent;