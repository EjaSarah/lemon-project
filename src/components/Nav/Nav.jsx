// import "./Nav.css";

// function Nav() {
//   return (
//     <nav className="nav">
//       <ul>
//         <li>
//           <a href="#home">Home</a>
//         </li>
//         <li>
//           <a href="#menu">Menu</a>
//         </li>
//         <li>
//           <a href="#reservations">Reservations</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;

// src/components/Nav/Nav.jsx
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/booking">Booking</Link>
        </li>
        <li>
          <a href="#specials">Specials</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#chicago">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
