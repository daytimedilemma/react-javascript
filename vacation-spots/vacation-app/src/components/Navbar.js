import React from "react"
import vacationphoto from "../images/vacationphoto.jpg"
export default function Navbar() {
    return (
        <div className="navdiv">
            <nav className="navbar">Luxury Travel Industry<button className="navButton">Book Now!</button></nav>
            <img className="titlePhoto" src={vacationphoto} />
            <h1 className="welcome">Welcome to Your Vacation Destinations!</h1>
        </div>
    )
}  