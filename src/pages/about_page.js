import React from 'react'
import "../styles/about_page.css"
import "../styles/footer.css"
import worker from "../images/worker.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AboutPage() {

    return (
        <div id="about_page">
            <br/>
            <h1>The Church</h1>
                <Container>
                    <Row>
                        <Col>
                        <div className="whoWeAre">
                <h2>Who We Are</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                        </Col>

                        <Col>
                        <div classname="ourHistory">
                <h2>Our History</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation <br/>ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/>
                Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                        </Col>
                    </Row>
                </Container>

                <br/>
                <br/>

                <div className="worker" class="column">
                    <img src={worker} width="600" height="550" />
                 </div> 

            </div> 
    )
}

export default AboutPage