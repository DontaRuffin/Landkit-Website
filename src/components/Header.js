import React from 'react'
import { Link } from "gatsby"
import "../components/index.css"



import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
//import Container from './container'



const Header = () => {
    return (
    <div>
           <h3><b>+</b> Land Kit</h3>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/pavingkit/">Paving Kit</Link></li>
                    <li><Link to="/plantkit/">Plant Kit</Link></li>
                    <li><Link to="/topokit">Topo Kit</Link></li>
                    <li><Link to="/learning/">Learning</Link></li>
                    <li><Link to="/checkout/">Checkout</Link></li>
                    </ul>
                </nav>
  </div>
    )
}
export default Header 