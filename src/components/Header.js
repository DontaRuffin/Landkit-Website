import React from 'react'
import { Link } from "gatsby"



const Header = () => {
    return (
        <div>
            <h1>Land kit</h1>
                <nav>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about/">About</Link></li>
                    <li><Link to="/pavingkit/">Paving kit</Link></li>
                    <li><Link to="/plantkit/">Plant kit</Link></li>
                    <li><Link to="/topokit">Topo kit</Link></li>
                    <li><Link to="/learning/">Learning</Link></li>
                    <li><Link to="/checkout/">Checkout</Link></li>
                    </ul>
                </nav>
        </div>
    )
}
export default Header 