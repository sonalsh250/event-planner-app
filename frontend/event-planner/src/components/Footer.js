import React from "react"; 
import logo from '../images/logo.JPG';

const Footer = () => {
    return (
      <footer className="text-white py-4" style={{background: '#11407D'}}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Image Section */}
            <div className="col-md-2 text-center text-md-left">
              <img
                src={logo} // Replace with your logo URL
                alt="Logo"
                className="img-fluid"
              />
            </div>
  
            {/* Text, Button, and Social Media Links */}
            <div className="col-md-8">
              <p className="mb-2">
                At SN Event Planners, we turn your dreams into reality with carefully curated experiences.
              </p>
              <button className="btn btn-light text-primary mb-3" id="contactus">Contact Us</button>
              <div>
                <a href="www.google.com" className="text-white me-3">
                <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="www.google.com" className="text-white me-3">
                  <i className="fab fa-facebook fa-lg"></i>
                </a>
                <a href="www.google.com" className="text-white me-3">
                  <i className="fab fa-pinterest fa-lg"></i>
                </a>
                <a href="www.google.com" className="text-white">
                  <i className="fab fa-linkedin fa-lg"></i>
                </a>
              </div>
            </div> 
          </div>
  
          {/* Links Below Content */}
          <div className="row mt-4">
            <div className="col-md-12 text-center">
              <a href="www.google.com" className="text-white me-4">
                Client Login
              </a>
              <a href="www.google.com" className="text-white me-4">
                Credits
              </a>
              <a href="www.google.com" className="text-white">
                Privacy Policy
              </a>
            </div>
          </div>
  
          {/* Copyright Section */}
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <small>
                &copy; {new Date().getFullYear()} SN Event Planners LLC, All rights reserved.
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  