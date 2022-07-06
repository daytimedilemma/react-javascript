import React, { useState } from "react"
import Badge from "./components/Badge"
import Form from "./components/Form"

export default function App() {
    const [badgeList, setBadgeList] = useState([])
    const listOfBadges = badgeList.map((person, index) => <Badge
        key={index + person}
        {...person}
    />
    );

   function addItemToList(newBadgeEntry){
    setBadgeList(prevList =>[...prevList, newBadgeEntry])
   }
    return (
        <div>
            <Form addItemToList={addItemToList}/>
            {listOfBadges}
        </div>
    )
}