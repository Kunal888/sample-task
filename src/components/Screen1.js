import React from 'react'
import Sidebar from './Sidebar'
import Sales from './Sales'
import Notepad from './Notepad'
import Graph from './Graph'
import Graph2 from './Graph2'
import Notifications from'./Notifications'
import '../App.css'

function Screen1() {
    return (
        <div className="screen1">
            <Sidebar />

            <div id="display">
                <input type="text" id="search-box" placeholder="Search here ..."/>
                <Sales />
                <div id="data">
                    <Notepad />
                    <Graph />
                    <Graph2 />
                </div>
            </div>

            <Notifications />
        </div>
    )
}

export default Screen1
