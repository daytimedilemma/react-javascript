import React from "react"
import Card from "./components/Card"
import data from "./data"
export default function App() {
    const destinations = data.map(items => {
        
        return (
            <Card {...items}/>
        )
    })
    return (
        <div className="cards">
            {destinations}
        </div>
    )
}