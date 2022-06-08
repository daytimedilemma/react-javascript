import React from "react"
import BlogPost from "./BlogPost"
import data from "./data"
export default function BlogList(){
    const lists = data.map(items => {
        return (
            <BlogPost {...items}/>
        )
    })
    return (
        <div>
            {lists}
        </div>
    )
}