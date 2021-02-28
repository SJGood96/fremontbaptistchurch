import React, { Component } from "react"
import "../styles/ministries_page.css"


function MinistriesPage() {
    return (
        <div id="ministries_page" className="App-page">
            <h1>Ministries</h1>
            <br/>

            <div className="foodBank">
            <h2>Food Bank</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="clothing">
            <h2>Clothing for the Homeless</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <div className="prayer">
            <h2>Prayer Meeting</h2>
                <p>When: Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. </p>
            </div>

            <div className="breakfast">
            <h2>Men's Breakfast</h2>
                <p>When: Lorem ipsum dolor</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. </p>
            </div>
            <br/>

        </div>
    )
}

export default MinistriesPage