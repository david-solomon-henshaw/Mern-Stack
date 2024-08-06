// src/components/Register.js
import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaLockOpen } from "react-icons/fa"; // Import icons
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { toast } from "react-toastify";

const Register = () => {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const onChange = (e) => {
    setformData((prevState) => ({
        ...prevState,
        [e.target.name] : e.target.value
    }))
  }


  const onSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
        toast.error("Passwords aren't the same ")
    } else {
        toast.success('Successful')
    }
  }

    const {name, email, password,confirmPassword} = formData



  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Register</h3>
            <form>
              <div className="form-group mb-4">
                <label htmlFor="name" className="d-flex align-items-center">
                  <FaUser className="mr-2" /> Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter full name"
                  required
                  onChange={onChange}
                  value={name}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="d-flex align-items-center">
                  <FaEnvelope className="mr-2" /> Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  required
                  onChange={onChange}
                  value={email}
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
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  required
                  value={password}
                />
              </div>
              <div className="form-group mb-4">
                <label
                  htmlFor="confirm-password"
                  className="d-flex align-items-center"
                >
                  <FaLockOpen className="mr-2" /> Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={onChange}
                  required
                  value={confirmPassword}
                />
              </div>
              <button type="submit" onClick={onSubmit} className="btn btn-primary btn-block">
                Register
              </button>
              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/">Login here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
