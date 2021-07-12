import React from "react";
import "../styles/Navbar_styles.css";
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 id={'nav'}> + LAND KIT </h2>
      <div>
        <ul className="menu_list">
                  <li><Link to="/">HOME</Link></li>
                  <li><Link to="/pavingkit/">PAVE</Link></li>
                  <li><Link to="/plantkit/">PLANT</Link></li>
                  <li><Link to="/topokit">TOPO</Link></li>
                  <li><Link to="/learning/">LEARN</Link></li>
                  <li><Link to="/checkout/">CHECKOUT</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;