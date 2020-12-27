import React from 'react'
import img3 from '../images/img3.PNG'
import img4 from '../images/img4.PNG'
import '../App.css'

function Graph2() {
    return (
        <div>
            <div id="graph2">
                <div>This Month</div>
                <hr />
                <span>+7.8%</span>
                <img src={img3} alt="graph"/>
            </div>
            <div id="graph2">
                <div>Last Month</div>
                <hr />
                <span>+67.4%</span>
                <img src={img4} alt="graph"/>
            </div>
        </div>
    )
}

export default Graph2
