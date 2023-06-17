

import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="btn btn-outline-dark">HOME</NavLink>
      <NavLink to="/cart" className="btn btn-outline-dark ms-2">CART</NavLink>
    </div>
  );
};

export default Navbar;
