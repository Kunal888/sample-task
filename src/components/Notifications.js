import React from 'react'
import Notification from './Notification'
import '../App.css'

function Notifications() {
    return (
        <div id="notifications">
            <h4>Notifications</h4>
            <h6>Events</h6>
            <Notification sender="Admin" content="Your faculty uploaded the syllabus." timestamp="3 min ago"/>
            <Notification sender="Admin" content="Your faculty uploaded the syllabus." timestamp="3 min ago"/>
            <Notification sender="Admin" content="Your faculty uploaded the syllabus." timestamp="3 min ago"/>
            <Notification sender="Admin" content="Your faculty uploaded the syllabus." timestamp="3 min ago"/>
            <Notification sender="Admin" content="Your faculty uploaded the syllabus." timestamp="3 min ago"/>
            <button id="notifications-next">next</button>
        </div>
    )
}

export default Notifications
