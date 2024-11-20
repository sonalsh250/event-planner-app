import React from "react"; 
import login from '../images/loginImage.jpg';

const Login = () => {
    return (
        <div className="container my-5">
            {/* Main Content */}
            <div className="row align-items-center">
                {/* Image */}
                <div className="col-md-6 text-center">
                    <img
                        src={login}
                        alt="Computer Illustration"
                        className="img-fluid"
                        style={{ maxHeight: "400px" }}
                    />
                </div>

                {/* Login Form */}
                <div className="col-md-6">
                    <div className="p-4 shadow-lg rounded">
                        <h1 className="mb-4 text-center">Welcome Back</h1>

                        {/* Email */}
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

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Enter your password"
                            />
                        </div>
                        {/* Button */}
                        <button className="btn btn-primary btn-block mb-2" id="contactus">Login</button>
                        {/* Signup Link */}
                        <div className="text-center mb-3">
                            <small>
                                Don’t have an account? <a href="/signup">Sign Up</a>
                            </small>
                        </div>

                        {/* Social Login */}
                        <div className="text-center">
                            <button className="btn btn-danger btn-block mb-2">
                                <i className="fab fa-google me-2"></i> Sign in with Google
                            </button>
                            <button className="btn btn-primary btn-block">
                                <i className="fab fa-facebook me-2"></i> Sign in with Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
