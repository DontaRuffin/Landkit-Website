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
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/pavingkit/">PAVING</Link></li>
                    <li><Link to="/plantkit/">PLANT</Link></li>
                    <li><Link to="/topokit">TOPO</Link></li>
                    <li><Link to="/learning/">LEARN</Link></li>
                    <li><Link to="/checkout/">STORE</Link></li>
                    </ul>
                </nav>
  </div>
    )
}
export default Header 