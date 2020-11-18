import React from "react";
import { Form } from "react-bootstrap";
import "./banner.scss";
import banner from "../../../Images/Rectangle 13.png";
const Banner = () => {
  return (
    <section className="banner">
      <div className="row" style={{ marginRight: "0px" }}>
        <div className="col-md-6 offset-md-3 ">
          <div className="row">
            <h1
              className="text-white"
              style={{
                textAlign: "center",
                margin: "0 auto",
                marginTop: "150px",
              }}
            >
              Find Your House Rent
            </h1>
          </div>
          <div className="row">
            <dib className="col-md-8">
              <input
                type="text"
                className="form-control banner-item"
                placeholder="search..."
              />
            </dib>
            <div className="col-md-4 ">
              <button type="button" className=" banner-btn">
                Find
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
