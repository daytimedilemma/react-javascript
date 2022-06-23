import React from "react"
export default function Dice(props){ 
    return (
        <h1 style={{
            display:"flex",
            padding:"20px",
            justifyContent:"space-around",
        }}>{props.numbers}</h1>
    )
}