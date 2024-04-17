import { Link } from "react-router-dom"
import "./NavBar.css"
import React from "react"

function NavBar(){
    return(
        <div>
            <nav className="mainnav"> 
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact Us</Link>
            </nav>
        </div>
    )
}

export default NavBar
/* <a to href="/">Home</a>
<a href="/About">About</a>
<a href="/Contact">Contact Us</a> */