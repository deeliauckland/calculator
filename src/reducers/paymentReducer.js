import {
    APPROXIMATE_PAYMENT,
    FULL_PAYMENT_REQUEST,
    FULL_PAYMENT_SUCCESS,
    FULL_PAYMENT_FAIL
} from '../constants/calculatorConstants'

export const paymentReducer = (state={},action) => {
    switch (action.type) {
        case FULL_PAYMENT_REQUEST:
            return {loading:true,paymentInfo:action.payload}   
        case FULL_PAYMENT_SUCCESS:
            return { loading: false, paymentInfo:action.payload };   
        case FULL_PAYMENT_FAIL:
            return { loading: false, error: action.payload };
        case APPROXIMATE_PAYMENT:
            return { loading: false, paymentInfo:action.payload };
        default:
            return state;
    }
}


