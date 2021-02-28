import React, { Component } from "react"
import "../styles/ministries_page.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function MinistriesPage() {
    return (
        <div id="ministries_page" className="App-page">
            <h1>Ministries</h1>
            <br/>

            <Container>
                    <Row>
                        <Col>
                        <div className="foodBank">
            <h2>Food Bank</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
                        </Col>

                        <Col>
                        <div className="clothing">
            <h2>Clothing for the Homeless</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <div className="prayer">
            <h2>Prayer Meeting</h2>
                <p>When: Every Wednessday</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. </p>
            </div>
                        </Col>

                        <Col>
                        <div className="breakfast">
            <h2>Men's Breakfast</h2>
                <p>When: Third Saturday of the month</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/>sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud <br/> exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. </p>
            </div>
                        </Col>
                    </Row>
                </Container>  



            <br/>



        </div>
    )
}

export default MinistriesPage