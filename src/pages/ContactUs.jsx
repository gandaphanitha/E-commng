
import React from 'react';
// import '../css/ContactUs.css';
import '../css/ContactUs.css';
const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>You can reach us via the following methods:</p>
      <div className="contact-details">
        <h3>Address</h3>
        <p>123 Main Street, Anytown, USA</p>
        
        <h3>Phone</h3>
        <p>(123) 456-7890</p>
        
        <h3>Email</h3>
        <p>info@example.com</p>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <ul>
          <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
