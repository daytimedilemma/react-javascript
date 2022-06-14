import React from "react";
export default function Pets(props) {
    let pet = props.pets.map(items => {
        let captializedBreed = `${items.breed[0].toUpperCase()}${items.breed.substring(1)}`
        return (<li>{`${items.name[0].toUpperCase()}${items.name.substring(1)}`} is a {captializedBreed}</li>)
    })
    return (
        <div>
            <p>{props.name} has {props.pets.length} pet(s). Here are their pets and their breeds:</p>
            <ul>
                {pet}
            </ul>
            <hr />
        </div>
    )
}