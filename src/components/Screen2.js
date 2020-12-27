import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Comment from './Comment'
import '../App.css'

function Screen2() {

    const [comments, setComments] = useState([
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    ]);
    const [current, setCurrent] = useState('');

    function handleOnSubmit(e) {
        e.preventDefault()
        if(current!=='') setComments([...comments, current])
        else alert('Enter the comment!')
        setCurrent('')
    }

    function deleteComment(id) {
        let temp = comments.filter((comment,i) => {
            return (i !== id)
        })
        setComments(temp)
    }

    return (
        <div id="screen2">
            <Sidebar />

            <div id="comments">
                <form id="enter-comment" onSubmit={handleOnSubmit}>
                    <textarea type="text" id="comment-area" value={current} placeholder="Enter your comment..."
                    onChange={(e) => {
                        setCurrent(e.target.value)
                    }} />
                    <div id="buttons">
                        <button id="cancel-comment" type="button" onClick={() => setCurrent('')}>Cancel</button>
                        <button id="submit-comment" type="submit">Share</button>
                    </div>
                </form>
                
                <div id="comments-section">
                    {comments.map((comm,i) => <Comment key={i} id={i} delete={deleteComment}>{comm}</Comment>)}
                </div>
            </div>
        </div>
    )
}

export default Screen2
