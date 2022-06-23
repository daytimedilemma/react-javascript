import React, {useState} from "react"
import Dice from "./components/Dice"
export default function App(){
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5])
    console.log()
    function allRandomNumbers(){
           console.log("button clicked")
        setNumbers(prevNumber => {
            function newNumber() {
                return Math.floor(Math.random() * 6) + 1
            }
                   return [newNumber() , newNumber(), newNumber(), newNumber(), newNumber()]
        })
    }

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "200px 200px",
            margin: "20px",
            gap: "20px"
        }}>
            <Dice numbers={numbers[0]}/>
            <Dice numbers={numbers[1]}/>
            <Dice numbers={numbers[2]}/>
            <Dice numbers={numbers[3]}/>
            <Dice numbers={numbers[4]}/>
            <button onClick={allRandomNumbers}>Random Numbers!</button>
        </div>
    )
}