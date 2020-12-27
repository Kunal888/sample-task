import React from 'react'
import img from '../images/user-img.jpg'
import '../App.css'

function Comment(props) {
    return (
        <div id="comment">
            <div id="user-img">
                <img src={img} alt="user" />
            </div>
            <div id="comment-data">
                <h2>Username</h2>
                <h4>12:40 pm</h4>
                <p>{props.children}</p>
            </div>
                <button id="delete-comment" onClick={() => props.delete(props.id)}><i>&#x1F5D1;</i></button>
        </div>
    )
}

export default Comment
