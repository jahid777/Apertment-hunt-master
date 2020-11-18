// <<<<<<< HEAD
// import React, { useEffect, useState } from "react";
// =======

// import React, { useState } from "react";
// >>>>>>> 4ac336c244fbf18a2b5d335e9f51a98101315074
import React, { useEffect, useState } from "react";
import "./ApartmentDetails.css";

import img1 from "../../Images/Rectangle 407.png";
import img2 from "../../Images/Rectangle 408.png";
import img3 from "../../Images/Rectangle 409.png";
import img4 from "../../Images/Rectangle 410.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectApartment } from "../../features/appSlice";
import { selectBooker, setBookerInfo } from "../../features/bookerSlice";
import instance from "../axios";
import userEvent from "@testing-library/user-event";
import { selectUser } from "../../features/userSlice";

const ApartmentDetails = () => {
  const apartment = useSelector(selectApartment);
  // const [booker, setBooker] = useState({});
  const dispatch = useDispatch();
  const booker = useSelector(selectBooker);
  const user = useSelector(selectUser);
  const history = useHistory();

  useEffect(() => {
    dispatch(
      setBookerInfo({
        ...booker,
        name: user?.displayName,
        email: user?.email,
      })
    );
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await instance.post("/addBooking", {
      name: booker.name,
      emailID: booker.email,
      phoneNo: booker.number,
      message: booker.message,
      status: "Pending",
      houseName: apartment.title,
      price: apartment.price,
    });

    history.push("/bookings");
  };
  return (
    <div className="apartmentDetails">
      <div className="apartment__banner">
        <h1>Apartment</h1>
      </div>
      <div className="apartmentDetails__container">
        <div className="apartmentDetails__info">
          <img src={apartment.photo} alt="" />
          <div className="apartmentDetails__infoImg">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
          </div>
          <div className="apartmentDetails__infoHeader">
            <div className="apartmentDetails__infoTitle">
              <h1>{apartment.title} </h1>
              <h1>{apartment.price}</h1>
            </div>
            <p>
              3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing
              Apartment for Rent in Rangs Malancha, Melbourne.
            </p>
          </div>
          <div className="apartmentDetails__infoPrice">
            <h2>Price Details</h2>
            <p>Rent/Month: $550 (negotiable) </p>
            <p>Service Charge : 8,000/= Tk per month,</p>
            <p>subject to change Security Deposit : 3 month’s rent</p>
            <p> Flat Release Policy : 3 months earlier notice required</p>
          </div>
          <div className="apartmentDetails__infoProperty">
            <h2>Property Details</h2>
            <p>
              Address & Area : Rangs Malancha, House-68, Road-6A (Dead End
              Road), Dhanmondi Residential Area.{" "}
            </p>
            <p>
              Flat Size : 3000 Sq Feet. Floor : A5 (5th Floor) (6 storied
              Building ) (South Facing Unit)
            </p>
            <p>
              Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious
              Drawing, Dining & Family Living Room, Highly Decorated Kitchen
              with Store Room and Servant room with attached Toilet.
            </p>
            <p>
              Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
            </p>
            <p>
              {" "}
              Additional Facilities : a. Electricity with full generator load,
              b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s
              Accommodation, d. Community Conference Hall, e. Roof Top
              Beautified Garden and Grassy Ground, f. Cloth Hanging facility
              with CC camera
            </p>
          </div>
        </div>
        <div className="apartmentDetails__form">
          <form className="apartmentDetails__formbox" action="">
            <input
              type="text"
              value={user?.displayName}
              placeholder="Full Name"
              required="required"
            />
            <input
              type="text"
              onBlur={(e) =>
                dispatch(
                  setBookerInfo({
                    ...booker,
                    number: e.target.value,
                  })
                )
              }
              placeholder="Phone No."
              required="required"
            />
            <input
              type="email"
              value={user?.email}
              placeholder="Email Address"
              required="required"
            />
            <input
              type="text"
              onBlur={(e) =>
                dispatch(
                  setBookerInfo({
                    ...booker,
                    message: e.target.value,
                  })
                )
              }
              placeholder="Message"
            />

            <button onClick={handleSubmit} type="submit">
              Request Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApartmentDetails;

