import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function Sidebar() {
    return (
        <div id="sidebar">
            <ul className="screen-links">
                <Link to="/screen1"><li>Screen1</li></Link>
                <Link to="/screen2"><li>Screen2</li></Link>
            </ul>
            <ul>
                <li className="list-item" id="li1">
                    <span>&#9626;</span>Dashboard
                </li>
                <li className="list-item" id="li2">
                    <span>&#8960;</span>Lorem
                </li>
                <li className="list-item" id="li3">
                    <span>&#9881;</span>Ipsum
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
