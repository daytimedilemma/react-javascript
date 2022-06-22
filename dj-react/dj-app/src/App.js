import React, { useState } from "react"
import Square from "./components/Square"
function App() {
    const [color, setColor] = useState(["white", "white", "white", "white"]);
    function blackAndWhite() {
        setColor(prevColor => {
            if (prevColor[0] === "white") {
                return prevColor = ["black", "black", "black", "black"]
            } else {
                return ["white", "white", "white", "white"]
            }
        })

    }

    function topPurple() {
        setColor(prevState => {
            return ["purple", "purple", prevState[2], prevState[3]]
        })
    }

    function bottomLeftBlue(){
        setColor(prevState => {
            return [prevState[0], prevState[1], "blue", prevState[3]]
        })
    }

    function bottomRightBlue(){
        setColor(prevState => {
            return [prevState[0], prevState[1], prevState[2], "blue"]
        })
    }

    function bigDjOne(){
        setColor(prevState => {
            return ["orange", prevState[1], prevState[2], prevState[3]]
        })
    }

    function bigDjTwo(){
        setColor(prevState => {
            return [prevState[0], "pink", prevState[2], prevState[3]]
        })
    }

    function bigDjThree(){
        setColor(prevState => {
            return [prevState[0], prevState[1], "green", prevState[3]]
        })
    }

    function bigDjFour(){
        setColor(prevState => {
            return [prevState[0], prevState[1], prevState[2], "#00A5AD"]
        })
    }
    return (
        <div className="djGrid" style={{
            display: "grid",
            gridTemplateColumns: "200px 200px",
            margin: "20px",
            gap: "20px"
        }}>
            <Square color={color[0]} />
            <Square color={color[1]} />
            <Square color={color[2]} />
            <Square color={color[3]} />
            <button onClick={blackAndWhite}>Black and White Toggle</button>
            <button onClick={topPurple}>Top Boxes Purple</button>
            <button onClick={bottomLeftBlue}>Bottom Left</button>
            <button onClick={bottomRightBlue}>Bottom Right</button>
            <button onClick={bigDjOne}>Big DJ One</button>
            <button onClick={bigDjTwo}>Big DJ Two</button>
            <button onClick={bigDjThree}>Big DJ Three</button>
            <button onClick={bigDjFour}>Big DJ Four</button>
        </div>
    )
}
export default App