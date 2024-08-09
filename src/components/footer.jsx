// import React from "react";
// import "../css/Footer.css"; // Import your CSS file here

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h1 className="logo">
//             <span>Company</span>Logo
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//             vitae volutpat mauris. Nulla consectetur condimentum ligula vel
//             elementum.
//           </p>
//           <div className="contact">
//             <span>Contact us:</span>
//             <div>
//               <i className="fas fa-phone"></i> Phone: +1234567890
//             </div>
//             <div>
//               <i className="fas fa-envelope"></i> Email:
//               info@example.com
//             </div>
//           </div>
//           <div className="socials">
//             <a href="#">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//         <div className="footer-section links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Products</a>
//             </li>
//             <li>
//               <a href="#">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <p className="footer-bottom-text">
//         &copy; {new Date().getFullYear()} Company. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;


// import React from "react";
// // import "css/Footer.css"; // Import your CSS file here
// import "../css/footer.css"; // Relative path from src/components to src/css



// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-section about">
//           <h1 className="logo">
//             <span>Company</span>Logo
//           </h1>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
//             vitae volutpat mauris. Nulla consectetur condimentum ligula vel
//             elementum.
//           </p>
//           <div className="contact">
//             <span>Contact us:</span>
//             <div>
//               <i className="fas fa-phone"></i> Phone: +1234567890
//             </div>
//             <div>
//               <i className="fas fa-envelope"></i> Email: info@example.com
//             </div>
//           </div>
//           <div className="socials">
//             <a href="#">
//               <i className="fab fa-facebook"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-instagram"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-twitter"></i>
//             </a>
//             <a href="#">
//               <i className="fab fa-linkedin"></i>
//             </a>
//           </div>
//         </div>

//         <div className="footer-section links">
//           <h2>Quick Links</h2>
//           <ul>
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/about">About</a>
//             </li>
//             <li>
//               <a href="#">Services</a>
//             </li>
//             <li>
//               <a href="#">Products</a>
//             </li>
//             <li>
//               <a href="/contactUs">Contact</a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <p className="footer-bottom-text">
//         &copy; {new Date().getFullYear()} Company. All rights reserved.
//       </p>
//     </footer>
//   );
// };

// export default Footer;
// import "../assets/css/components/Footer.css";
import "../css/footer.css"; // Relative path from src/components to src/css

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p>For better experience, download the app now</p>
        <div className="footer-apps">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
          </a>
          <a href="#">
            <img
              src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-app-store.svg"
              alt="App Store"
            />
          </a>
        </div>
      </div>
      <div className="footer-content">
        <div className="footer-column">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/en/6/6a/Swiggy_logo.svg"
            alt="Swiggy Logo"
            className="footer-logo"
          /> */}
          <p>© 2024 Bundl Technologies Pvt. Ltd</p>
        </div>
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">E-commerce One</a></li>
            <li><a href="#">E-commerce Instamart</a></li>
            <li><a href="#">E-commerce Genie</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Ride with us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>We deliver to:</h4>
          <ul>
            <li><a href="#">Bangalore</a></li>
            <li><a href="#">Gurgaon</a></li>
            <li><a href="#">Hyderabad</a></li>
            <li><a href="#">Delhi</a></li>
            <li><a href="#">Mumbai</a></li>
            <li><a href="#">Pune</a></li>
            <li>
              <select>
                <option value="589 cities">589 cities</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
