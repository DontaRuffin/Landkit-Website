import React from "react"
import ReactDom from 'react'
import "../components/index.css"
import Footer from "../components/footer"
/*import Header from "../components/Header"*/
/*import HeaderTwo from "../components/HeaderTwo"*/
import Navbar from "./Navbar"
import MobileNavbar from "./MobileNavbar"

/*import { link } from "gatsby"*/



export default function Layout(props) {
  return <div>
          <div>
            <Navbar />
            <MobileNavbar />
            {props.children}
          </div>
            <Footer /> 
        </div>
}

