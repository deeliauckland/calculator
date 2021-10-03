import {
    RESULT_SUCCESS,
} from '../constants/resultConstants'

export const getResult = () => async(dispatch) =>{

    const paymentInfo = JSON.parse(sessionStorage.getItem('paymentInfo'));
    const userInfo = sessionStorage.getItem('userInfo');

    dispatch({
        type: RESULT_SUCCESS,
        payload:{...paymentInfo,userInfo}
      })
    
}