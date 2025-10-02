import logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon Logo" className="logo" />
      {/* <h1 className="header-title">Little Lemon</h1> */}
    </header>
  );
}

export default Header;
