import { combineReducers } from "redux";
import { counterReader } from "./counter.reduce";

export const rootReducer = combineReducers({
    const : counterReader
})