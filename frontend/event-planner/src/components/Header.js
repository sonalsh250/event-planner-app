import React from 'react';
// import { Outlet, Link } from "react-router-dom";

import logo from '../images/logo.JPG';

const Header = () => {
    return (
        <header className="bg-white text-dark py-6">
            <div className="container d-flex justify-content-between align-items-center">
                {/* Logo */}
                <div className="logo">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ height: '120px' }} />
                </div>
                
                {/* Navigation Links */} 
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/" style={{ color: '#16099D' }}>Home</a>
                        </li>
                        <li className="nav-item">
                            {/* <Link to="/services">Services</Link> */}
                            <a className="nav-link fs-3" href="/services" style={{ color: '#16099D' }}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/about" style={{ color: '#16099D' }}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/contact" style={{ color: '#16099D' }}>Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/login" style={{ color: '#16099D' }}>Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3" href="/signup" style={{ color: '#16099D' }}>Sign Up</a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* <Outlet/> */}
        </header>
    );
};

export default Header;
