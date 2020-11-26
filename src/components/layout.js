import React from "react"
import "../components/index.css"
import Header from "../components/Header"
import Footer from "../components/footer"
import HeaderTwo from "../components/HeaderTwo"
import { link } from "gatsby"


export default function Layout(props) {
  return <div>
          <div>
            <HeaderTwo />
            <Header />
              {props.children}
          </div>
            <Footer /> 
        </div>
}

