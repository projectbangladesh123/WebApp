import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
import { Navbar, Nav, Button } from 'react-bootstrap';
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
        <Navbar collapseOnSelect fixed="top" bg="white" variant="light" expand="md" expanded={expandedProp} onToggle={() => setExpanded(expandedProp ? false : true)}>
            <Navbar.Brand as={Link} to="/"  onClick={() => setExpanded(false)}>
                {" "}
                <img src="brandLogo.svg" alt="icon" className="logo" /> 
        </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                {/* left side nav items */}
                {/* <Nav className="mr-auto link-items">
                </Nav> */}
                {/* Right side nav items */}
                <Nav className="ml-auto link-items">
                    <Nav.Link as={Link} to="/about-us" className="nav-item-link">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/contact" className="nav-item-link" onClick={() => setExpanded(false)}>Contact</Nav.Link>
                    <Nav.Link  href="#home">
                        <Button variant="outline-dark">
                            Blog
                        </Button>
                    </Nav.Link>
                    <Nav.Link as = {Link} to = "/join">
                        <Button variant="outline-dark">
                            Join Us
                        </Button>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigationbar