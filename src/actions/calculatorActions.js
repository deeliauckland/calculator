
import axios from 'axios'
import {FULL_PAYMENT,APPROXIMATE_PAYMENT} from '../constants/calculatorConstants'

export const fullPayment = (payment) => async(dispatch,getState) =>{
    // const {data} = await axios.post('/api/fullpayment',payment);
    const {data} = {payment: {
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
    const {data} = {payment: {
        Terms: "1",
        LoanAmount: "2",
        InterestRate: "3",
        ResidualValue:"1",
        PaymentAmount:"1"
      }}
    dispatch({
        type: APPROXIMATE_PAYMENT,
        payload:data
      })
}