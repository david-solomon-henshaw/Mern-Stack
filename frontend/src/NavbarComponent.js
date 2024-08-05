// src/Navbar.js
import React from 'react';

const NavbarComponent = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container">
          <a className="navbar-brand" href="#home">Book Management App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto d-lg-none">
              {/* Off-canvas menu items */}
              <li className="nav-item">
                <a className="nav-link nav-button" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-button" href="#books">Books</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto d-none d-lg-flex align-items-center">
              {/* Nav items for large screens */}
              <li className="nav-item">
                <a className="nav-link nav-button" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-button" href="#books">Books</a>
              </li>
              <li className="nav-item">
                <span className="navbar-text me-3 text-dark">User</span> {/* Placeholder for user's name */}
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-danger">Sign Out</button> {/* Sign-out button */}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Book Management App</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d-flex flex-column">
          <ul className="navbar-nav">
            {/* Off-canvas menu items */}
            <li className="nav-item">
              <a className="nav-link nav-button" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nav-button" href="#books">Books</a>
            </li>
          </ul>
          <div className="d-flex flex-column mt-4">
            <span className="user-text mb-2 text-dark">User</span> {/* Placeholder for user's name */}
            <button className="btn btn-outline-danger">Sign Out</button> {/* Sign-out button */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
