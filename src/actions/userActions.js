import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT
} from '../constants/userConstants'

export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST })
  
      const config = {
        headers: {
          'Content-type': 'application/json'
        }
      }
  
    //   const { data } = await axios.post(
    //     '/api/users/login',
    //     { email, password },
    //     config
    //   )

      const data ={
          email: email,
          name:"dee",
          _id: "523",
          token: "123"

      }
  
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
  
      sessionStorage.setItem('userInfo', JSON.stringify(data))
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