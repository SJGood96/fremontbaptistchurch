import React from 'react'
import pastorJeff from '../images/pastorJeff.jpg'
import pastorMike from '../images/pastorMike.jpg'
import "../styles/team_page.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function TeamsPage() {
    const pastorName = 'Jeff Good'
    const paster2Name = 'Mike Crosser'
    return (
        <div id="team_page">
            <h1>Meet the Pastors</h1>
            <br/>
                <Container>
                    <Row>
                        <Col>
                        <h2> Pastor: {pastorName} </h2>
                            <div className="seniorPastor">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            </div> 
                        </Col>

                        <Col>
                            <div className="pastorJeff">
                                <img src={pastorJeff} width="300" height="350" />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className="pastorMike">
                                <img src={pastorMike} width="300" height="350" />
                            </div>  
                        </Col>

                        <Col>
                            <h2> Pastor: {paster2Name} </h2>
                                <div className="p">
                                    <br/>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br/>dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex <br/>ea commodo consequat. 
                                        Duis aute irure dolor in reprehenderit in <br/>voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                        Excepteur sint occaecat cupidatat non proident, <br/>sunt in culpa qui officia deserunt mollit anim id est laborum.
                                        </p>
                                </div>
                        </Col>
                    </Row>
                </Container>                      
        </div>
    )
}

export default TeamsPage