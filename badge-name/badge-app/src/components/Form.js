import React, {useState} from "react"
export default function Form(props) {
   const [formData , setFormData]= useState({
        firstName: "",
        lastName: "",
        email: "",
        placeOfBirth: "",
        phone: "",
        favFood: "",
        description: ""
    })

    function  onHandle(event){
        const {value, name} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        props.addItemToList(formData)  
    }

    return (
        <div>
            <form className="formGrid" onSubmit={handleSubmit}> 
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
        </div>
    )
    }
