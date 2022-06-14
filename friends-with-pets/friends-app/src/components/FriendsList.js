import React from "react"
import Friends from "./Friends"
import Pets from "./Pets"
import data from "./data"
import Header from "./Header"
export default function FriendsLists(props) {
    let friendslist = data.map(items => {
        return (
            <div>
                <Friends {...items} />
                <Pets {...items} />
            </div>
        )
    })
    return (
        <div>
            {friendslist}
        </div>
    )
}