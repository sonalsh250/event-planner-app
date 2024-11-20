import React from "react"; 
import signup from "../images/signup.avif";

const Signup = () => {
    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                {/* Left Half - Image */}
                <div className="col-md-6 d-none d-md-block p-0">
                    <img
                        src={signup}
                        alt="Signup Illustration"
                        className="img-fluid w-100 h-100"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Right Half - Signup Form */}
                <div className="col-md-6 d-flex align-items-center justify-content-center">
                    <div className="p-4 shadow-lg rounded w-75">
                        {/* Sign Up Heading */}
                        <h1 className="mb-4 text-center">Sign Up</h1>

                        {/* Name Field */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder="Enter your full name"
                            />
                        </div>

                        {/* Date of Birth Field */}
                        <div className="mb-3">
                            <label htmlFor="dob" className="form-label">
                                Date of Birth
                            </label>
                            <input
                                type="date"
                                id="dob"
                                className="form-control"
                            />
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Enter your email"
                            />
                        </div>

                        {/* Password Field */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Create a password"
                            />
                        </div>

                        {/* Signup Button */}
                        <div className="text-center mb-3">
                            <button className="btn btn-success btn-block w-100">
                                Sign Up
                            </button>
                        </div>

                        {/* Social Signup Buttons */}
                        <div className="text-center">
                            <button className="btn btn-danger btn-block mb-2 w-100">
                                <i className="fab fa-google me-2"></i> Sign up with Google
                            </button>
                            <button className="btn btn-primary btn-block w-100">
                                <i className="fab fa-facebook me-2"></i> Sign up with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
