import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { paymentReducer } from "./reducers/paymentReducer";
import { userLoginReducer } from "./reducers/userReducer";
import { resultReducer } from "./reducers/resultReducer";

const reducer = combineReducers({
    payment:paymentReducer,
    userLogin:userLoginReducer,
    result:resultReducer
});

const paymentInfoFromStorage = sessionStorage.getItem('paymentInfo')
?JSON.parse(sessionStorage.getItem('paymentInfo'))
:null;

const userInfoFromStorage = sessionStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  

const initialState = {
    payment: {
      paymentInfo:paymentInfoFromStorage
    },
    userLogin: { userInfo: userInfoFromStorage },
    result:{resultInfo:{}}
  };

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );


  
  
  export default store;