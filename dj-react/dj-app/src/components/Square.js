import React from "react"
function Square(props) {
    const pColor = props.color
    
    return (
        <p style={{
                backgroundColor: pColor,
                height: "200px",
                width: "200px",
            }}></p>

    )
}

export default Square