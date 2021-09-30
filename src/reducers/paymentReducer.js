import {
    FULL_PAYMENT,
    APPROXIMATE_PAYMENT
} from '../constants/calculatorConstants'

export const paymentReducer = (state={},action) => {
    switch (action.type) {
        case FULL_PAYMENT:
            const fullPayment = action.payload;
            console.log(fullPayment);
            return {...state,PaymentAmount:{fullPayment}}   
        case APPROXIMATE_PAYMENT:
            const  approximatePayment = action.payload;
            return {...state,payment:{...state.payment,PaymentAmount:{approximatePayment}}}    
    
        default:
            return state;
    }
}


