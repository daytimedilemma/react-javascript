import React from "react"
export default function Badge(props){
    return (
    <div className="badgeDiv">
        <nav>Badge:</nav>
        <h3 className="name">Name: {props.firstName} {props.lastName}</h3>
        <h3 className="phone">Phone: {props.phone}</h3>
        <h3 className="birth">Place of birth: {props.placeOfBirth}</h3>
        <h3 className="food">Favorite food: {props.favFood}</h3>
        <h3 className="email">Email: {props.email}</h3>
        <div className="description">{props.description}</div>
    </div>
    )
}