import React from 'react'
import Card from './Card'
import './Home.css'

function Display(props) {
    return (
        <div className="display">
            <h1>{props.title}</h1>
            <div className="cards">
                <Card img={"london"} text={"London"}/>
                <Card img={"italy"} text={"Italy"}/>
                <Card img={"maldives"} text={"Maldives"}/>
            </div>
        </div>
    )
}

export default Display
