// HeaderImage.jsx
import React from 'react';
import headerImage from './assets/banner.jpg'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const HeaderImage = () => {
  return (
    <div className="position-relative">
      <img
        src={headerImage}
        alt="Header"
        className="img-fluid w-100"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />

      
      <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
        <h1 className="display-4 fw-bold">Welcome to Our Firm</h1>
        <p className="lead">Your trusted legal partner</p>
      </div>
    </div>
  );
};

export default HeaderImage;
