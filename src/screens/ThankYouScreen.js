import React from 'react'
import { Link } from 'react-router-dom';

export default function ThankYouScreen({history}) {

    const continueHandler = (e) => {
        e.preventDefault()
        history.push('/')
      
      }

    return (
        <div class="jumbotron text-center">
            <h3>Thank you for your business!</h3>
            <p className="lead">Your loan amount exceed 1,000,000</p>
            <hr/>
            
            <p class="lead">
                <Link className="btn btn-primary btn-sm" onClick={continueHandler} role="button">Continue to Calculator</Link>
            </p>
        </div>
    )
}
