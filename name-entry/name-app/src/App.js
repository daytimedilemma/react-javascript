import React, { useState } from "react"
export default function App() {
    const [formData, setFormData] = useState("")
    const [formDataList, setFormDataList] = useState(["Bill", "Joe", "Jill"])
    const orderList = formDataList.map((name, index) => {
        return (
            <li key={index}>{name}</li>
        )
    })

    function handleChange(event) {
         setFormData(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setFormDataList(prevFormDataList => {
            return [...prevFormDataList, formData]
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="New Name"
                name="name"
                onChange={handleChange}
            />
            <h1>{formData}</h1>
            <button>Update Name</button>
            <ol>
                {orderList}
            </ol>
        </form>
    )
}