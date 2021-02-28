import React, { Component } from "react"
import church from '../images/church.jpg'
import disciple from '../images/disciple.jpg'
import refuge from '../images/refuge.jpg'
import "../styles/home_page.css"



function HomePage() {
    return (
        <div id="home_page" className="App-page">

        <h1> Welcome!</h1>
        <br/>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <br/>
        <br/>
        
        <div class="row">
        <div className="church" class="column">
          <img src={church} width="500" height="350" />
        </div> 

        <div className="disciple" class="column">
            <img src={disciple} width="350" height="350" />
        </div>

        <div className="refuge"class="column">
            <img src={refuge} width="350" height="350"/>
        </div>
        </div>

        </div>
        
    )
}

export default HomePage