
import axios from 'axios'
import {FULL_PAYMENT,APPROXIMATE_PAYMENT,FULL_PAYMENT_REQUEST,FULL_PAYMENT_SUCCESS,FULL_PAYMENT_FAIL} from '../constants/calculatorConstants'

export const fullPayment = (Terms,LoanAmount,InterestRate,ResidualValue) => async(dispatch,getState) =>{

  try {
    
    dispatch({ type: FULL_PAYMENT_REQUEST})

    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    }

    // const { data } = await axios.post(
    //   '/api/users/login',
    //   {payment},
    //   config
    // )

    const data = {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount:1984}
    dispatch({ type: FULL_PAYMENT_SUCCESS, payload: data })
    sessionStorage.setItem('paymentInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: FULL_PAYMENT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
    // const {data} = await axios.post('/api/fullpayment',payment);

    
}

export const approximatePayment = (payment) => async(dispatch,getState) =>{
    // const {data} = await axios.post('/api/approximatePayment',payment);
    const{Terms,LoanAmount,InterestRate,ResidualValue}= payment
    
    let PaymentAmount=(((LoanAmount*1+ResidualValue*1)/2*InterestRate/12*Terms*1+(LoanAmount*1-ResidualValue*1))/Terms)
       
    const approximateData = {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount:PaymentAmount.toFixed(2)}
    dispatch({
        type: APPROXIMATE_PAYMENT,
        payload:approximateData
        // payload:getState()
      })
}