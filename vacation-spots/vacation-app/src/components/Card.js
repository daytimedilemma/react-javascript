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

    return (
        <div>
            <h1>{props.place}</h1>
            <p>{expense} {props.price}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}