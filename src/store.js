import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { paymentReducer } from "./reducers/paymentReducer";


const reducer = combineReducers({
    payment:paymentReducer
});

const initialState = {
    payment: {
      Terms: {},
      LoanAmount: {},
      InterestRate: {},
      ResidualValue:{},
      PaymentAmount:{}
    },
    userLogin: { userInfo: {} },
  };

const middlewares = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );


  
  
  export default store;