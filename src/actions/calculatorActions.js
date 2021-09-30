
import axios from 'axios'
import {FULL_PAYMENT,APPROXIMATE_PAYMENT} from '../constants/calculatorConstants'

export const fullPayment = (payment) => async(dispatch,getState) =>{
    // const {data} = await axios.post('/api/fullpayment',payment);
    const data = {payment: {
        Terms: "1",
        LoanAmount: "2",
        InterestRate: "3",
        ResidualValue:"1",
        PaymentAmount:"1"
      }}

    dispatch({
        type: FULL_PAYMENT,
        payload:data
      })
}

export const approximatePayment = (payment) => async(dispatch,getState) =>{
    // const {data} = await axios.post('/api/approximatePayment',payment);
    const{Term,LoanAmount,InterestRate,ResidualValue}= payment
    
    let PaymentAmount=((LoanAmount*1+ResidualValue*1)/2*InterestRate/12*Term*1+(LoanAmount*1-ResidualValue*1))/Term
       
    
    dispatch({
        type: APPROXIMATE_PAYMENT,
        payload:PaymentAmount
      })
}