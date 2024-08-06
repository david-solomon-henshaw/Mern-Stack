// src/components/Login.js
import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa'; // Import icons
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Login = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Login</h3>
            <form>
              <div className="form-group mb-4">
                <label htmlFor="email" className="d-flex align-items-center">
                  <FaUser className="mr-2" /> Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password" className="d-flex align-items-center">
                  <FaLock className="mr-2" /> Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Login
              </button>
              <div className="text-center mt-3">
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
