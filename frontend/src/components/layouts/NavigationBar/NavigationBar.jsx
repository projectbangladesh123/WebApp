import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./NavigationBar.css"



/*
* https://stackoverflow.com/questions/54859515/react-bootstrap-navbar-collapse-not-working
* To make collapseOnSelect to work, which collapses the menu when we select an item,
* we need to add eventkey
*/

const Navigationbar = () => {
    // ml-auto allign items to the right
    const [expandedProp, setExpanded] = useState(false)
    return (
        <Navbar collapseOnSelect fixed="top" bg="dark" variant="dark" expand="lg" expanded={expandedProp} onToggle={() => setExpanded(expandedProp ? false : true)}>
            <Navbar.Brand as={Link} to="/" eventKey="8" onClick={() => setExpanded(false)}>
                {" "}
                <FontAwesomeIcon icon={faLaptopCode} className="brand-icon" />
          Project Bangladesh
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto link-items">
                    <Nav.Link as={Link} to="/about-me" className = "nav-item-link">About Me</Nav.Link>
                    <Nav.Link href="#link" >Work Experience</Nav.Link>
                    <Nav.Link href="#link" >Portfolio</Nav.Link>
                    <Nav.Link as={Link} to="/education" >Education</Nav.Link>
                    <Nav.Link href="https://github.com/shafirpl/" target="_blank">
                        GitHub
            </Nav.Link>
                </Nav>
                <Nav className="ml-auto link-items">
                    <Nav.Link  href="#home">Resume</Nav.Link>
                    <Nav.Link  href="#link">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar