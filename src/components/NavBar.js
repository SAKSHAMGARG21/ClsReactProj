import { Link } from "react-router-dom"
import "./NavBar.css"
import React from "react"

function NavBar(){
    return(
        <div>
            <nav className="mainnav"> 
                <Link to="/">Todos</Link>
                <Link to="/WApp">Weather App</Link>
                <Link to="/cc">Currency Converter</Link>
                <Link to="/game">Game</Link>
            </nav>
        </div>
    );
}

export default NavBar
/* <a to href="/">Home</a>
<a href="/About">About</a>
<a href="/Contact">Contact Us</a> */