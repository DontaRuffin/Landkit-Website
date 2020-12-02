import React from "react"
import "../components/index.css"
import Footer from "../components/footer"
import Header from "../components/Header"
import { link } from "gatsby"


export default function Layout(props) {
  return <div>
          <div>
            <Header />
              {props.children}
          </div>
            <Footer /> 
        </div>
}

