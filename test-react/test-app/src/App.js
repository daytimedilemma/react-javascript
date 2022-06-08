import React from "react"
import BlogPost from "./components/BlogPost"
// import data from "./data"
export default function App() {
    const lists = data.map(item => {
        return (
            <BlogPost {...item} />
        )
    })
    return (
        <section>
            {lists}
        </section>
    )
}