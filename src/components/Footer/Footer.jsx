import "./Footer.css";

// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4>Contact</h4>
        <p>123 Lemon Street, Chicago</p>
        <p>+1 123 456 7890</p>
        <p>info@littlelemon.com</p>
      </div>
      <div className="footer-column">
        <h4>Opening Hours</h4>
        <p>Mon-Fri: 10:00 - 22:00</p>
        <p>Sat-Sun: 12:00 - 23:00</p>
      </div>
      <div className="footer-column">
        <h4>Follow Us</h4>
        <p>Facebook | Instagram | Twitter</p>
      </div>
    </footer>
  );
}

export default Footer;

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-logo">Little Lemon</div>
//         <ul className="footer-links">
//           <li>Home</li>
//           <li>About</li>
//           <li>Menu</li>
//           <li>Reservations</li>
//           <li>Order Online</li>
//           <li>Login</li>
//         </ul>
//         <div className="footer-contact">
//           <p>123 Mediterranean St, Chicago, IL</p>
//           <p>Email: contact@littlelemon.com</p>
//           <p>Phone: (123) 456-7890</p>
//         </div>
//         <div className="footer-social">
//           <span>Facebook</span> | <span>Instagram</span> | <span>Twitter</span>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
