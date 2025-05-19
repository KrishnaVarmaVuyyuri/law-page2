import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/law-logo.png';  
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white  sticky-top header-nav">
      <div className="container-fluid">
       
        <Link className="navbar-brand ms-4" to="/">
          <img src={logo} alt="Logo" width="120" height="auto" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> 

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {/* Home */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/"
                end
                activeClassName="active"  
              >
                Home
              </NavLink>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/about"
                activeClassName="active"
              >
                About Us
              </NavLink>
            </li>

            {/* Our Portfolio Dropdown */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle text-black fw-semibold fs-6 px-3"
                to="#"
                id="portfolioDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Our Portfolio
              </Link>
              <ul className="dropdown-menu" aria-labelledby="portfolioDropdown">
                <li><Link className="dropdown-item" to="/portfolio1">Portfolio 1</Link></li>
                <li><Link className="dropdown-item" to="/portfolio2">Portfolio 2</Link></li>
              </ul>
            </li>

            {/* Resources */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/resources"
                activeClassName="active"
              >
                Resources
              </NavLink>
            </li>
            {/* cases*/}
            <li className="nav-item">
              <NavLink className="nav-link text-black fw-semibold fs-6 px-3" to='/cases' activeClassName='active' >
                  Cases
              </NavLink>
            </li>
            {/* case details */}
            

            {/* Blog */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/blog"
                activeClassName="active"
              >
                Blog
              </NavLink>
            </li>

            {/* Contact Us */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/contact"
                activeClassName="active"
              >
                Contact Us
              </NavLink>
            </li>

            {/* Events */}
            <li className="nav-item">
              <NavLink
                className="nav-link text-black fw-semibold fs-6 px-3"
                to="/events"
                activeClassName="active"
              >
                Events
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
