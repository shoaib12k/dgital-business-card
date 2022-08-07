import React from "react"
import ReactDOM from "react-dom"

export default function Info(){
    return (
        <>  <div className="info-area">
                <img src="../images/imaged.jpg"/>
                <h1 id = "name">Shoaib Khan</h1>
                <p id="designation">Frontend developer</p>
                <a id="website" href="#">shoaib.xyz</a>
            </div>
            <div className="btn-area">
                <div className="btn email-btn">
                    <img className="btn-icon" src="../images/email.png"/>
                    <p> Email </p>
                </div>
                <div className="btn linkedin-btn">
                    <img className="btn-icon" src="../images/link.png"/>
                    <p> Linkedin </p>
                </div>
             </div>
        </>
    )
}