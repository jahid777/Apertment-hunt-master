import React from 'react';
import services from '../../../fakeData2';
import ServiceContent from '../ServiceContent/ServiceContent';

const Service = () => {

    
    return (
        <section style={{paddingBottom:"50px"}}>
        <div className="container">
            <div className="row" style={{padding: '100px 0'}}>
                    <div className="col-md-6 offset-md-3">
                        <p className='text-center'>Service</p>
                        <h2 className='text-center'>We're an agency tailored to all
                        clients' needs that always delivers</h2>
                    </div>
                
            </div>
            <div className="row">
                
                    {
                        services.map((service=><ServiceContent service={service}></ServiceContent>))
                    }
            </div>
        </div>
        </section>
    );
};

export default Service;