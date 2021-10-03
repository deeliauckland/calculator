import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = (props) => {
    return (
        <header>
            <Navbar variant="dark" >
                <LinkContainer to="/">
                    <Nav.Link>
                    <i className="fas fa-calculator"></i>calculator
                  </Nav.Link>
                </LinkContainer>
            </Navbar>
        </header>
    )
}

export default Header;



