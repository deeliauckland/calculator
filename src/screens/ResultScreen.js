import React,{useEffect} from 'react'
import { Row, Col, ListGroup} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import {getResult} from '../actions/resultAction'
import Loader from '../components/Loader';


export default function ResultScreen({history}) {

    const result = useSelector(state => state.result);
    const {resultInfo,loading} = result
    const dispatch = useDispatch();
   
    useEffect(()=>{
        
        const timer = setTimeout(() => {
            dispatch(getResult());
            console.log("dispatch")
          }, 400);
          return () => clearTimeout(timer);

     },[dispatch]);

    return (
            <FormContainer>
                 { loading && <Loader /> }
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5>Calculation Summary</h5>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>User:</Col>
                    <Col>{resultInfo.userInfo}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>Terms(months)</Col>
                  
                    <Col>{resultInfo.Terms}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>LoanAmount($)</Col>
                    <Col>{resultInfo.LoanAmount}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>InterestRate(%)</Col>
                    <Col>{resultInfo.InterestRate}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>ResidualValue($)</Col>
                    <Col>{resultInfo.ResidualValue}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                    <Row>
                    <Col><h4>Payment Amount</h4></Col>
                    <Col><h4>${resultInfo.PaymentAmount}</h4></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </FormContainer>  
    ) 
}
