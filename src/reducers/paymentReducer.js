import {
    FULL_PAYMENT,
    APPROXIMATE_PAYMENT
} from '../constants/calculatorConstants'

export const paymentReducer = (state={},action) => {
    switch (action.type) {
        case FULL_PAYMENT:
            const fullpayment = action.payload.payment;
            // console.log(fullPayment);
            return {...state,...fullpayment}   
        case APPROXIMATE_PAYMENT:
            const  PaymentAmount = action.payload;
            console.log(PaymentAmount);
            return {...state,PaymentAmount}    
    
        default:
            return state;
    }
}


