import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import instance from "../axios";
// import { useStateValue } from "../StateProvider";
import "./Bookings.css";
import logo from "../../Images/Logo.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import instance from "../axios";
function Bookings() {
  const user = useSelector(selectUser);
  const [allBookings, setAllBookings] = useState([]);
  const [myBookings, setMyBookings] = useState([]);

  useEffect(() => {
    instance.get("/getBookings").then((res) => setAllBookings(res.data));
  }, []);

  useEffect(() => {
    instance.get("/getUserBookingList?name=" + user.displayName).then((res) => {
      setMyBookings(res.data);
    });
  }, []);

  const [toggleValue, setToggleValue] = useState(0);

  return (
    <div className="booking">
      <div className="booking__left">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <p onClick={() => setToggleValue(0)}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-people"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1h7.956a.274.274 0 0 0 .014-.002l.008-.002c-.002-.264-.167-1.03-.76-1.72C13.688 10.629 12.718 10 11 10c-1.717 0-2.687.63-3.24 1.276-.593.69-.759 1.457-.76 1.72a1.05 1.05 0 0 0 .022.004zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10c-1.668.02-2.615.64-3.16 1.276C1.163 11.97 1 12.739 1 13h3c0-1.045.323-2.086.92-3zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
            />
          </svg>
          Booking List
        </p>
        <p onClick={() => setToggleValue(1)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          Add Rent
        </p>
        <p onClick={() => setToggleValue(2)}>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            class="bi bi-plus"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
            />
          </svg>
          My Rent
        </p>
      </div>

      <div className="booking__right">
        <div className="booking__rightHeader">
          <h1>
            {toggleValue === 0
              ? "Booking List"
              : toggleValue === 1
              ? "Add Rent"
              : "My Rent"}
          </h1>
          <p>{user?.displayName || user?.email}</p>
        </div>

        {toggleValue === 0 ? (
          <div className="booking__list">
            <div className="bookings bookings__header">
              <p>Name</p>
              <p>Email Id</p>
              <p>Phone No</p>
              <p>Message</p>
              <p>Status</p>
            </div>

            {allBookings.map((booking) => (
              <div className="bookings">
                <p>{booking.name}</p>
                <p>{booking.emailID}</p>
                <p>{booking.phoneNo}</p>
                <p>{booking.message}</p>
                <p>{booking.status}</p>
              </div>
            ))}
          </div>
        ) : toggleValue === 1 ? (
          <div className="AddRent">
            <form action="" className="AddRent__form">
              <div className="inputGrp">
                <div className="input">
                  <h4>Service Title</h4>
                  <input type="text" placeholder="Enter title" />
                </div>
                <div className="input">
                  <h4>Price</h4>
                  <input type="text" placeholder="Enter price" />
                </div>
              </div>
              <div className="inputGrp">
                <div className="input">
                  <h4>Location</h4>
                  <input type="text" placeholder="Enter location" />
                </div>
                <div className="input">
                  <h4>No. of bedroom</h4>
                  <input type="text" placeholder="Enter no. of bedrooms" />
                </div>
              </div>
              <div className="inputGrp">
                <div className="input">
                  <h4>No. of bathroom</h4>
                  <input type="text" placeholder="Enter no. of bathrooms" />
                </div>
                <div className="input">
                  <h4>Thumbnail</h4>
                  <button>Upload Image</button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="myRent__list">
            <div className="myRents myRents__header">
              <p>House Name</p>
              <p>Price</p>

              <p>Action</p>
            </div>

            {myBookings.map((booking) => (
              <div className="myRents">
                <p>{booking.houseName}</p>
                <p>{booking.price}</p>
                <button>View Details</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bookings;
