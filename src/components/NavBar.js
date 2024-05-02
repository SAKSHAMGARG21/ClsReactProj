import { Link } from "react-router-dom"
import "./NavBar.css"
import React from "react"

function NavBar(){
    return(
        <div>
            <nav className="mainnav"> 
                <Link to="/main/td">Todos</Link>
                <Link to="/main/WApp">Weather App</Link>
                <Link to="/main/cc">Currency Converter</Link>
                <Link to="/main/game">Game</Link>

                {/* <Link to="/td">Todos</Link>
                <Link to="/WApp">Weather App</Link>
                <Link to="/cc">Currency Converter</Link>
                <Link to="/game">Game</Link> */}
            </nav>
        </div>
    );
}

export default NavBar
/* <a to href="/">Home</a>
<a href="/About">About</a>
<a href="/Contact">Contact Us</a> */