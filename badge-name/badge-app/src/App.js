import React, { useState } from "react"
import Badge from "./components/Badge"
export default function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favFood: "",
        description: ""
    })
   

    const [badgeList, setBadge] = useState([])

   

    const styles = {
        display: "grid",
        margin: "100px"
    }
    console.log(formData)
    function onHandle(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault()
        const newBadge = formData
        setBadge(prevBadgeList => {
            return [...prevBadgeList, newBadge]
        })
        
    }

    return (
        <div>
            <form style={styles} className="data--form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={onHandle}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={onHandle}
                />
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={onHandle}
                />
                <input
                    type="text"
                    placeholder="Place of Birth"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={onHandle}
                />
                <input
                    type="number"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={onHandle}
                />
                <input
                    type="text"
                    placeholder="Favorite Food"
                    name="favFood"
                    value={formData.favFood}
                    onChange={onHandle}
                />
                <textarea
                    value={formData.description}
                    onChange={onHandle}
                    placeholder="Tell us about yourself!"
                    name="description"
                />
                <button>Submit</button>

            </form>
            <Badge badgeList={badgeList}/>

        </div>
    )
}