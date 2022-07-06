import { useState, useEffect } from "react"
import axios from "axios"
export default function App() {
    // const [randomColor, setRandomColor] = useState({})
    const [currentColor, setCurrentColor] = useState("AD23AD")
    

    useEffect(() => {
        axios.get(`https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}`)
        .then(res => {
            console.log(res.data)
            setCurrentColor(res.data.new_color)
        })
        .catch(error => error)
    }, [])
   
    const styles = {
        backgroundColor:`#${currentColor}`,
        height: "500px",
        width: "1000px"
    }
    

   
    return (<div style={styles}>Testing</div>)
}