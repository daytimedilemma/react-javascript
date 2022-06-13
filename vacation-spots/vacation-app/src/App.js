import React from "react"
import Card from "./components/Card"
import data from "./data"
import Navbar from "./components/Navbar"
import vacation-photo from "./vacation-photo.jpg"
export default function App() {
    const destinations = data.map(items => {
        
        return (
            <Card {...items}/>
        )
    })
    return (
        <div className="cards">

            <Navbar />
            {destinations}
        </div>
    )
}