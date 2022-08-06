import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img src="./images/image1.jpg"></img>
            <div className="info--profile">
            <h1>Harsh Chandwani</h1>
            <h3>A frontend Developer</h3>
            <h4>github.com/harshchandwani</h4>

            <div className="btn">
                <a className="email"><ion-icon name="mail-outline"></ion-icon><span> Email </span></a> 
                <a className="linkedin"><ion-icon name="logo-linkedin"></ion-icon> LinkedIn</a> 
            </div>
            </div>
            
        </div>
    )
}