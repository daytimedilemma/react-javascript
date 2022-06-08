import React from "react"
import BlogList from "./components/BlogList"
import Header from "./components/Header"
import Footer from "./components/Footer"
export default function App(){
    return (
        <div>
            <Header />
            <BlogList />
            <Footer />
        </div>
    )
}