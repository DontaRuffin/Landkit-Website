import React, { useState } from "react";
import "../styles/Navbar_styles.css";
import { Link } from "gatsby"
import { Twirl as Hamburger } from "hamburger-react";

const MobileNavbar = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

  // Toggle the Mobile Nav open / close
  const handleMobileNavClick = () => {
    mobileNavIsOpen ? setMobileNavIsOpen(false) : setMobileNavIsOpen(true);
  };

  window.addEventListener("resize", () => {
    window.innerWidth > 600 && setMobileNavIsOpen(false);
  });

  return (
    <nav className="mobileNav_container">
      <h4> + LAND KIT</h4>
      <Hamburger toggled={mobileNavIsOpen} toggle={setMobileNavIsOpen}  />
      
      <div className="mobileNav_menu_container">
        <ul
          className={`${
            mobileNavIsOpen ? "mobileNav_open" : "mobileNav_closed"
          } mobileNav_menu_list`}
        >
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

export default MobileNavbar;
