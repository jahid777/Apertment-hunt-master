import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <section
      style={{
        backgroundColor: "#275A53",
        height: "300px",
        paddingTop: "60px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-2 text-right">
                <FontAwesomeIcon
                  icon={faMapMarker}
                  style={{ color: "white" }}
                />
              </div>
              <div className="col-md-10 text-white">
                <p>H#340 (4th Floor), Road #24,</p>
                <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                <p>Phone: 018XXXXXXXX</p>
                <p>E-mail: info@company.com</p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-4 text-white">
                <h4>Company</h4>
                <li>About</li>
                <li>Site Map</li>
                <li>Support Center</li>
                <li>Terms Conditions</li>
                <li>Submit Listing12345</li>
              </div>
              <div className="col-md-4 text-white">
                <h4>Quick Links</h4>
                <li>Quick Link</li>
                <li>Rental</li>
                <li>Sell</li>
                <li>Contact</li>
                <li>Terms</li>
                <li>Condition</li>
                <li>Our Blog</li>
              </div>
              <div className="col-md-4 text-white">
                <h4 className="text-white">About Us</h4>
                <p>
                  We are the top real estate agency in Sydney, with agents
                  available to answer any question 24/7.
                </p>
                <div className="row">
                  <div className="col-md-3">
                    <img
                      src="https://i.ibb.co/Dzy314X/Vector.png"
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://i.ibb.co/9wzJRfW/Vector-1.png"
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://i.ibb.co/NZGFwNZ/Vector-2.png"
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                  </div>
                  <div className="col-md-3">
                    <img
                      src="https://i.ibb.co/nc2Hd5Y/Vector-3.png"
                      alt=""
                      style={{ width: "22px", height: "22px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
