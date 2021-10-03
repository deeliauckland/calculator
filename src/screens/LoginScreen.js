import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { login } from '../actions/userActions';

export default function LoginScreen({ history, location }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (!userInfo) {
          history.push('/login')
        }else{
            history.push('/')
        }

      }, [history, userInfo])
    
      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(username, password));
      }

    return (
        <FormContainer>
            <h1>Sign In</h1>
            { error && <Message variant="danger">{error}</Message> }
            { loading && <Loader /> }
            <Form onSubmit={submitHandler}>
                
                <Form.Group controlId='email'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
                </Form.Group>

                <Button type="submit" variant="primary">Sign In</Button>

                <Row className="py-3">
                <Col>
                    New Customer?{' '}
                    <Link to='/' >Register to save</Link>
                </Col>
                </Row>
            </Form>
    </FormContainer>
    )
}
