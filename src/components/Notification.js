import React from 'react'

function Notification(props) {
    return (
        <div id="notification">
            <div id="notification-img">
            </div>
            <div id="notification-content">
                <h4 id="sender">{props.sender}</h4>
                <h4 id="content">{props.content}</h4>
                <h6 id="timestamp">{props.timestamp}</h6>
            </div>
        </div>
    )
}

export default Notification
