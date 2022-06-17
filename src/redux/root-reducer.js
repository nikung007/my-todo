import { combineReducers } from "redux";

import todoReducer from "./reduce";

const rootReducer = combineReducers({
    todos: todoReducer,

});

export default rootReducer;