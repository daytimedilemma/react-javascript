import React from "react"
export default function Card(props) {
    let expense 
    if(props.price <= 500){
        expense = "$"
    } else if(props.price <= 1000){
        expense = "$$"
    } else if(props.price >= 1000){
        expense = "$$$"
    } 
    
    let season
    if (props.timeToGo === "Winter") {
        season = "winter"
    } else if(props.timeToGo === "Spring") {
        season = "spring"
    } else if (props.timeToGo === "Fall") {
        season = "fall"
    } else if (props.timeToGo === "Summer") {
        season = "summer"
    }
    return (
        <div className={`${season}`} id="card">
            <h1>{props.place}</h1>
            <p>{expense} The trip will cost you around ${props.price}</p>
            <p>We suggest going around {props.timeToGo}!</p>
        </div>
    )
}