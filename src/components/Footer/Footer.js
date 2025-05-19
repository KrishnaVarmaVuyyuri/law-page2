import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope} from 'react-icons/fa';
import { FaFacebookF, FaLinkedinIn, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../../assets/footer-logo2.jpg'
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer bg-black text-white pt-5 pb-3 mt-5">
  <div className="container">
    <div className="row text-center text-md-start">
      {/* Logo Column */}
      <div className="col-12 col-md-3 mb-4">
        <img
          src={logo}
          alt="Astonish Logo"
          className="img-fluid d-block mx-auto mx-md-0"
          style={{ maxWidth: '130px' }}
        />
      </div>

      {/* Useful Links */}
      <div className="col-12 col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Useful Links</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Home</a></li>
          <li><a href="#" className="text-white text-decoration-none">About</a></li>
          <li><a href="#" className="text-white text-decoration-none">Our Blogs</a></li>
          <li><a href="#" className="text-white text-decoration-none">Events</a></li>
        </ul>
      </div>

      {/* Our Portfolio */}
      <div className="col-12 col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Our Portfolio</h6>
        <ul className="list-unstyled">
          <li><a href="#" className="text-white text-decoration-none">Our Cases</a></li>
          <li><a href="#" className="text-white text-decoration-none">Our Videos</a></li>
          <li><a href="#" className="text-white text-decoration-none">Resources</a></li>
          <li><a href="#" className="text-white text-decoration-none">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-12 col-md-3 mb-4">
        <h6 className="fw-bold mb-3">Contact Information</h6>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
          <IoLocationSharp className="uniform-icon me-2" />
          <span>123 Street, Vijayawada, AP</span>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
          <FaPhoneAlt className="uniform-icon me-2" />
          <span>+91-69944-9222</span>
        </div>
        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
          <FaEnvelope className="uniform-icon me-2" />
          <span>info@example.com</span>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <hr className="footer-line my-4" />
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
      <p className="mb-3 mb-md-0 text-center text-md-start">© 2025 Powered by <span className="text-purple">Digi Sphere</span></p>
      <div className="d-flex gap-3 justify-content-center">
        <FaFacebookF className="uniform-icon text-white" />
        <FaInstagramSquare className="uniform-icon text-white" />
        <FaXTwitter className="uniform-icon text-white" />
        <FaLinkedinIn className="uniform-icon text-white" />
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer
