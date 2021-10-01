import React from 'react'
import { LinkContainer } from "react-router-bootstrap";
import {  Nav, } from "react-bootstrap";
import { Link } from 'react-router-dom';

export default function ThankYouScreen({history}) {

    const continueHandler = (e) => {
        e.preventDefault()
        history.push('/')
      
      }

    return (
        <div class="jumbotron text-center">
            <h3>Thank you for your business!</h3>
            <p class="lead">Your loan amount exceed 1,000,000</p>
            <hr/>
            
            <p class="lead">
               {/* <LinkContainer to="/"> 
                <Nav.Link className="btn btn-primary btn-sm" role="button">
                Continue to Calculator
                </Nav.Link>
               </LinkContainer> */}
                <button className="btn btn-primary btn-sm" onClick={continueHandler} role="button">Continue to Calculator</button>
            </p>
        </div>
    )
}
