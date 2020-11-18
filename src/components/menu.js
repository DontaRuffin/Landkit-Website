import React from "react"
import { Link } from 'gatsby'



const Menu = () => {
  return   <nav>
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
} 
export default Menu