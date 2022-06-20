import React from "react"
function Square(props) {

    const colorsElements = props.color.map((element, index) => {
        return (
            <div>
                <p
                    id={`${element}`}
                    className={`box${index}`}>
                    {`Box ${index + 1}`}
                </p>
            </div>
        )
    })

    return (
        <div>
            {colorsElements}
            <button onClick={props.handleClick}>Change Color</button>
        </div>
    )
}

export default Square