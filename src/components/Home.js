import React from 'react'
import Display from './Display'
import './Home.css'

function Home() {
    return (
        <div id="home">
            <header>
                Get the latest on our COVID-19 response
            </header>
            <main>
                <div id="top-div">
                    switch to hosting
                </div>
                <div id="main-div">
                    <a href=".">Places to stay</a>
                    <div id="mid-div">
                        <ul>
                            <li>
                                Location <br />
                                Where are you going?
                            </li><hr />
                            <li>
                                Check in <br />
                                Add dates
                            </li><hr />
                            <li>
                                Check out <br />
                                Add dates
                            </li><hr />
                            <li>
                                Location <br />
                                Add guests
                            </li>
                            <li id="search-icon">
                                &#x1F50D;
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="bottom-div">
                    <h1> Go Near</h1>
                    <button> Explore nearby stays</button>
                </div>
            </main>
            <Display title="Popular Destinations"/>
            <Display title="Best Deals"/>
            <Display title="Live Anywhere"/>
            <Display title="Join Millions of Hosts"/>
            <footer>
                <ul>
                    <li>
                        <a href=".">ABOUT</a>
                    </li>
                    <li>
                        <a href=".">COMMUNITY</a>
                    </li>
                    <li>
                        <a href=".">HOST</a>
                    </li>
                    <li>
                        <a href=".">SUPPORT</a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Home
