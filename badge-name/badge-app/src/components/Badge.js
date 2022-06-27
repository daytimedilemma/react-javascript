import React from "react"
export default function Badge(props){
    const {badgeList} = props
    console.log(badgeList)
    const badge = badgeList.map(list => {
        return (
            <div>
                <h1>{badgeList.firstName}</h1>
            </div>
        )
    })

}