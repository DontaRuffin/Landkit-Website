import React from "react"
import { Link } from 'gatsby'



const Menu = () => {
  return   <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about/">about</Link></li>
                  <li><Link to="/pavingkit/">Paving kit</Link></li>
                  <li><Link to="/plantkit/">Contact</Link></li>
                  <li><Link to="/topokit">Topo kit</Link></li>
                  <li><Link to="/learning/">Learning</Link></li>
                  <li><Link to="/checkout/">Checkout</Link></li>
                </ul>
            </nav>
} 
export default Menu