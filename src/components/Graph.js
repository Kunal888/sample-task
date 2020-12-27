import React from 'react'
import img2 from '../images/img2.PNG'
import '../App.css'

function Graph() {
    return (
        <div id="graph">
            <div>
                <img src={img2} alt="graph"/>
            </div>
            <div id="inbox">
                <span id="inbox-title">Inbox</span>
                <span id="inbox-count">23</span>
            </div>
        </div>
    )
}

export default Graph
