
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
    //   `localhost:8080/backend/fullPayment?pv=${LoanAmount}&fv=${ResidualValue}&rate=${InterestRate}&term=${Terms}`,
      
    //   config
    // )

    const {data} = await axios.post(
      'localhost:8080/backend/fullPayment',
      {
        "pv":"600",
         "fv":"0",
         "rate":"0.12",
         "term":"6"
     },
      config
    )

    // const data = {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount:1984}
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


    
}

export const approximatePayment = (payment) => async(dispatch,getState) =>{
    // const {data} = await axios.post('/api/approximatePayment',payment);
    const{Terms,LoanAmount,InterestRate,ResidualValue}= payment
     
    let f_Terms = parseFloat(Terms)
    let f_LoanAmount = parseFloat(LoanAmount)
    let f_InterestRate = parseFloat(InterestRate)/100
    let f_ResidualValue = parseFloat(ResidualValue)

    
    let f_PaymentAmount = ((f_LoanAmount+f_ResidualValue)/2*f_InterestRate/12*f_Terms + (f_LoanAmount-f_ResidualValue))/f_Terms

    
    const approximateData = {Terms,LoanAmount,InterestRate,ResidualValue,PaymentAmount:f_PaymentAmount.toFixed(2)}
    dispatch({
        type: APPROXIMATE_PAYMENT,
        payload:approximateData
        // payload:getState()
      })
}