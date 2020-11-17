import React from "react"
import "../components/index.css"
import Header from "../components/Header"
import Footer from "../components/footer"



export default function Layout(props) {
  return <div>
          <div>
            <Header />
              {props.children}
          </div>
            <Footer /> 
        </div>
}

const div = {}
