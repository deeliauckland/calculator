import {
    RESULT_SUCCESS,
} from '../constants/resultConstants'

export const resultReducer = (state = {}, action) => {
    switch (action.type) {
      case RESULT_SUCCESS:
        return { loading: false, resultInfo:action.payload }; 
      default:
        return state;
    }
  };