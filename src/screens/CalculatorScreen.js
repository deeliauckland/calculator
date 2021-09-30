import React,{ useState,useEffect } from 'react'
import {Form,Row,Col,Button,Container,ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {fullPayment,approximatePayment} from '../actions/calculatorActions'

export default function CalculatorScreen() {
    const payment = useSelector(state => state.payment);

    const [Term,setTerm]=useState(payment.Term);
    const [LoanAmount,setLoanAmount]=useState(payment.LoanAmount);
    const [InterestRate,setInterestRate]=useState(payment.InterestRate);
    const [ResidualValue,setResidualValue]=useState(payment.Term);
    const [PaymentAmount,setPaymentAmount]=useState(payment.PaymentAmount);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
       
        
      }

      useEffect(() => {
        
          dispatch(approximatePayment({Term,LoanAmount,InterestRate,ResidualValue}));
        
      }, [dispatch,Term,LoanAmount,InterestRate,ResidualValue]);

      useEffect(() => {
        
        dispatch(approximatePayment({Term,LoanAmount,InterestRate,ResidualValue}));
      
    }, [dispatch,Term,LoanAmount,InterestRate,ResidualValue,PaymentAmount]);
      

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col  md={6}>
                    <Form variant="flush" onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formTerm">
                            <Form.Label column  md ={4}>
                            {Term}Term (months):
                            </Form.Label>
                            <Col  md={8}>
                            <Form.Control as="input" type="number" placeholder="36" min="0" value={Term} required onChange = {(e)=>setTerm(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formLoanAmount">
                            <Form.Label column md ={4}>
                            Loan Amount($):
                            </Form.Label>
                            <Col md ={8}>
                            <Form.Control as="input" type="number" placeholder="100,000" min="0" value={LoanAmount} required onChange = {(e)=>setLoanAmount(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formInterestRate">
                            <Form.Label column md ={4}>
                            Interest Rate(%):
                            </Form.Label>
                            <Col md ={8}>
                            <Form.Control as="input" type="number" placeholder="10" min="1" max="100" value={InterestRate} required onChange = {(e)=>setInterestRate(e.target.value)}/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="formResidualValue">
                            <Form.Label column md ={4}>
                            Residual Value($):
                            </Form.Label>
                            <Col md ={8}>
                            <Form.Control as="input"  type="text" placeholder="0" value={ResidualValue} required onChange = {(e)=>setResidualValue(e.target.value)} />
                            </Col>
                        </Form.Group>
                        <Button type="submit" variant="primary">Save</Button>
                    </Form>
                </Col>

                <Col md={6}>

                <ListGroup variant="dark">
                    <ListGroup.Item className="list-group-item list-group-item-success">
                        <Row>
                        <Col>Payment Amount:</Col>
                        <Col>{PaymentAmount}</Col>
                    </Row>
                    </ListGroup.Item>
                
                </ListGroup>

                
                </Col>
            </Row>
            
        </Container>
    )
}


