import React from "react"
import { NavLink } from 'react-router-dom'
import "../styles/navigation_bar.css"
import Dropdown from 'react-bootstrap/Dropdown'
import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap'

function NavBar() {
    return (
        <div className="nav_list">
            <ul>
                <li><NavLink eventKey={1} to='/'>Home</NavLink></li> 
                <li><NavLink eventKey={2} to='/ministries'>Ministries</NavLink></li>   

                <li className="dropdown-format">
                    <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic" className="aboutText-format">
                       About
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <NavDropdown.Item eventKey={3.1} href="/about">Our Church</NavDropdown.Item>
                        <NavDropdown.Item eventKey={3.2} href='/beliefs-and-values'>Beliefs and Values</NavDropdown.Item>
                        <NavDropdown.Item eventKey={3.3} href="/team">Meet the Pastors</NavDropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>

                <li className="dropdown-format">
                    <Dropdown>
                    <Dropdown.Toggle variant="default" id="dropdown-basic" className="visitText-format">
                        Visit
                    </Dropdown.Toggle>

                    <Dropdown.Menu variant="default" id="dropdown-basic" className="visitText-format"> 
                        <NavDropdown.Item eventKey={4.1} href="/times">Times</NavDropdown.Item>
                        <NavDropdown.Item eventKey={4.2} href="/faq">FAQ</NavDropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </li>  
                <li>  
                </li>                  
            </ul>
        </div>

        
        
    );
}
 
export default NavBar