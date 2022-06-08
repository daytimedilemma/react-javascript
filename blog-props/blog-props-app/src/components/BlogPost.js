import React from "react"
export default function BlogPost(props){
    return (
        <div className="mainContent">
            <h2 className="propsTitle"><a href="https://startbootstrap.github.io/startbootstrap-clean-blog/post.html">{props.title}</a></h2>
            <h3 className="propsSubtitle">{props.subTitle}</h3>
            <p className="propsAuthor">Posted by <span>{props.author}</span> on {props.date}</p>
        </div>
    )
}