import React from 'react'
import '../App.css'

function Note(props) {
    return(
        <div id="note">
            <span id="note-title">{props.title}</span>
            <span id="note-content">{props.content}</span>
            <button id="delete-note" onClick={() => props.del(props.id)}><i>&#x1F5D1;</i></button>
        </div>
    )
}

export default Note 
