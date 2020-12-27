import React, { useState } from 'react'
import Note from './Note'
import '../App.css'

function Notepad() {

    const [notes, setNotes] = useState([
        ['Title', 'Lorem ipsum dolor sit am...'],
        ['Title', 'Lorem ipsum dolor sit am...'],
        ['Title', 'Lorem ipsum dolor sit am...']
    ])

    function handleOnClick() {
        let title = prompt('Enter the title : ')
        if(title.length >= 5) title = title.substring(0,5) + `...`
        if(!title) alert('Enter the title!')
        let content = prompt('Enter the content : ')
        if(title.length >= 20) content = content.substring(0,15) + `...`
        if(!content) alert('Enter the content!')
        if(title && content) setNotes([...notes, [title, content]])
    }

    function deleteNote(id) {
        let tempNotes = notes.filter((note,i) => {
            return (i !== id)
        })
        setNotes(tempNotes)
    }

    return (
        <div id="notepad">
            <div>
                <h4>Notepad</h4>
                <div id="notes">
                    {notes.map((note,i) => <Note key={i} id={i} title={note[0]} content={note[1]} del={deleteNote}/>)}      
                </div>
            </div>
            <div id="add-notes">
                <button onClick={handleOnClick}>
                    +
                </button>
            </div>
        </div>
    )
}

export default Notepad
