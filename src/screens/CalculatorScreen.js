import React,{ useState,useEffect } from 'react'
import {Form,Row,Col,Button,Container,ListGroup} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {fullPayment,approximatePayment} from '../actions/calculatorActions'

export default function CalculatorScreen({ history }) {
    

   

    const [Terms,setTerms]=useState("");
    const [LoanAmount,setLoanAmount]=useState("");
    const [InterestRate,setInterestRate]=useState("");
    const [ResidualValue,setResidualValue]=useState("");
    

    const dispatch = useDispatch();
    const payment = useSelector(state => state.payment);
    const {paymentInfo} = payment

    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userInfo } = userLogin;

    const submitHandler = (e) => {
        e.preventDefault()
        if(userInfo){
            if(LoanAmount >1000000){
                history.push('/thankyou');
            }else{
                dispatch(fullPayment(Terms,LoanAmount,InterestRate,ResidualValue));
                history.push('/result');
            }
            
        }else{
             history.push('/login');
        }
        
       
      }
    

      useEffect(() => {
       
          dispatch(approximatePayment({Terms,LoanAmount,InterestRate,ResidualValue}));
        
      }, [dispatch,Terms,LoanAmount,InterestRate,ResidualValue]);
      

    return (
        <Container>
            <Row className='justify-content-md-center'>
                <Col  md={6}>
                    <Form variant="flush" onSubmit={submitHandler}>
                        <Form.Group as={Row} className="mb-3" controlId="formTerms">
                            <Form.Label column  md ={4}>
                            Term (months):
                            </Form.Label>
                            <Col  md={8}>
                            <Form.Control as="input" type="number" placeholder="36" min="0" value={Terms} required onChange = {(e)=>setTerms(e.target.value)}/>
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
                            <Form.Control as="input" type="number" placeholder="10" min="0" max="100" value={InterestRate} required onChange = {(e)=>setInterestRate(e.target.value)}/>
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

                <ListGroup >
                    <ListGroup.Item variant="dark" >
                        <Row>
                        <Col>Payment Amount($):</Col>
                        {!(paymentInfo ==null) && !isNaN(paymentInfo.PaymentAmount)&&<Col>{paymentInfo.PaymentAmount}</Col>}
                        
                        
                    </Row>
                    </ListGroup.Item>
                
                </ListGroup>

                
                </Col>
            </Row>
            
        </Container>
    )
}


