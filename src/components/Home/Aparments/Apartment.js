import React from 'react';
import apartments from '../../../fakedata';
import HomePageApartment from '../homepageApartment/HomePageApartment';




const Apartment = () => {
    return (
        <section style={{paddingTop:"60px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <p className='text-center'>House Rent</p>
                        <h2 className='text-center'>Discover the latest rent
                        available today</h2>
                    </div>

                </div>
                <div className="row">
                    {
                        apartments.map(apartment =><HomePageApartment apartment={apartment}></HomePageApartment>)
                }
                </div>
            </div>
        </section>
    );
};

export default Apartment;