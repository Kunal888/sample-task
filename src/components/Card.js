import React from 'react'
import image from '../images/london.jfif'
import './Home.css'

function Card(props) {
    return (
        <div className="card">
            <img src={image} alt=""/>
            <h2>{props.text}</h2>
        </div>
    )
}

export default Card
