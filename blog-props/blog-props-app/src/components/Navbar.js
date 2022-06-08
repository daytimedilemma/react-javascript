import React from "react"
export default function Navbar(){
    return (
        <div className="title">
            <nav className="navBar">
               <span className="navTitle">Start Bootstrap</span>
               <button className="menuBtn">MENU</button> 
            </nav>
            <section className="cleanTitle">
                <h1 className="cleanBlog">Clean Blog</h1>
                <h3>A Blog Theme by Start Bootstrap</h3>
            </section>
        </div>
    )
}