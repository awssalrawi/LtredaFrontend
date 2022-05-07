import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
//import { thunk } from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";
import { authReducer } from "./reducers/userReducer";
const reducer = combineReducers({
  auth: authReducer,
});

//const middleware = [thunk];

const store = configureStore({
  reducer,
});

export default store;
