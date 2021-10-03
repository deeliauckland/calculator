import React,{useEffect,useState } from 'react'
import FormContainer from '../components/FormContainer';
import { Row, Col, ListGroup} from "react-bootstrap";

export default function ResultScreen() {

    const paymentInfo = JSON.parse(sessionStorage.getItem('paymentInfo'));
    const {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount} = paymentInfo

    const userInfo = sessionStorage.getItem('userInfo');
    // const [Terms, setpaymentInfo]=useState('');

    // const [paymentInfo, setpaymentInfo] = useState(JSON.parse(sessionStorage.getItem('paymentInfo')));
    // const {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount} = paymentInfo;

    // useEffect(() => {
    //     setpaymentInfo(JSON.parse(sessionStorage.getItem('paymentInfo'))
    //   });
    
    
    // useEffect(()=>{

    //     setpaymentInfo(JSON.parse(sessionStorage.getItem('paymentInfo')));
     
    //  },[]);

    return (
        <FormContainer>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <h5>Calculation Summary</h5>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>User:</Col>
                    <Col>{userInfo}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>Terms</Col>
                    <Col>${Terms}</Col>
                    {/* <Col>${paymentInfo.Terms}</Col> */}
                    </Row>
                </ListGroup.Item>

                {/* <ListGroup.Item>
                    <Row>
                    <Col>LoanAmount</Col>
                    <Col>${LoanAmount}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>InterestRate</Col>
                    <Col>${InterestRate}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row>
                    <Col>ResidualValue</Col>
                    <Col>${ResidualValue}</Col>
                    </Row>
                </ListGroup.Item>

                <ListGroup.Item variant="dark">
                    <Row>
                    <Col><h4>Payment Amount</h4></Col>
                    <Col><h4>${PaymentAmount}</h4></Col>
                    </Row>
                </ListGroup.Item> */}
            </ListGroup>
        </FormContainer>
    ) 
}
