import React from "react"
import About from "./components/About"
import Interests from "./components/Interests"
import Info from "./components/Info"
import Footer from "./components/Footer"

export default function App(){
    return(
        <div className="container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
} 