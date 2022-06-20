import React, {useState} from "react"
import Square from "./components/Square"
function App(){
    const [color, setColor] = useState(["white", "white", "white", "white"]);
    function changeColor(){
     setColor(prevState => prevState.map(color => {
        return [color ? "black" : "white"]
     }))
    }
    return (
        <div className="djGrid">
           <Square color={color} handleClick={changeColor}/>
        </div>
    )
}
export default App