import React from "react"
import Layout from "../components/layout"
import "../components/index.css"
import HeaderTwo from "../components/HeaderTwo"



export default function Home() {
  return <Layout>
                <div id={"Home"}>
                    <p><h1>+ Land Kit</h1></p>
                    <p>Land Kit leverages the power of computation and algorithmic design for landscape.</p>
                    <p>This compilation of digital design kits provides tools and templates you need to be a more efficient landscape designer and to work more fluidly in 3D.</p>
                </div>
                
                <div class={"row"}>
                  <div class={"column"}>
                    <h2>Paving Kit</h2>
                    <p>Paving Kit is a tool set for making paving design easier. By defining areas, patterns, and color rules, Paving Kit will help with designing, drafting, and modeling your paving for CAD or rendering. </p>
                  </div>
                  
                  <div class={'column'}>
                    <h2>Plant Kit</h2>
                    <image></image>
                    <p>Plant Kit is a powerful platform to make planting design easier and more site-specific. By defining environments, areas, plants, and rules, Plant Kit will help with keep track of the complexity, helping to layout and visualize your planting design for CAD, Revit, or rendering in Rhino, Lumion, or Enscape.</p>
                  </div>
                  
                  <div class={'column'}>
                    <h2>Topo Kit</h2>
                    <image></image>
                    <p>Topo Kit will change topography design forever. By easily creating and modifying topographic features in the landscape that help to define topography, you can avoid the sticky problem of relying on elevated contours to create and revise models. </p> 
                  </div>
              </div>
        </Layout>
        }


