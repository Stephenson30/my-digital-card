import React from "react"
import user from "./user.png"
import "./index.css"

export default function Header(){
    return(
        <div className="img-container">
            <img src={user} className="user"/>
        </div>
    )
}