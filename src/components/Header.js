import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
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



