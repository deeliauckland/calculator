import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
} from '../constants/userConstants'
import axios from 'axios'

//login action check the username and password from backend
export const login = (username, password) => async (dispatch) => {
    try {

      dispatch({ type: USER_LOGIN_REQUEST })
  
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
  
      const result = await axios.post(
        'http://localhost:8080/backend/login',
        {
          "username":username,
           "password":password,   
       },
        config
      )

      if (result){
        dispatch({ type: USER_LOGIN_SUCCESS, payload: username })
        sessionStorage.setItem('userInfo', username)
      }


    } catch (error) {

      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
      
    }
  }