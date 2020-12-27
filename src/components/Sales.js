import React from 'react'
import img1 from '../images/img1.PNG'

function Sales() {
    return (
        <div id="sales">
            <div id="sales-report">
                <p><h4>Sales Report</h4> September 2020</p>
                <img src={img1} alt="sales-report" />
            </div>
            <div id="sales-summary">
                <h4>17 Sep</h4>
                <div id="box1">
                    <p>$1,204.33</p><br/>
                    <p>Revenue</p>
                </div>
                <div id="box2">
                    <p>33</p><br/>
                    <p>Quotations</p>
                </div>
            </div>
        </div>
    )
}

export default Sales
