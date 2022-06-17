import logger from "redux-logger";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import {  } from "redux";
import todoReducer from "./reducer";

// import rootReducer from "./root-reducer";

// const middlerware = [];

// if (process.env.NODE_ENV === "devlopment") {
//     middlerware.push(logger);
// }



const rootReducer = combineReducers({
    todos: todoReducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

export default store;