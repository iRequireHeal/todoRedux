import inputButtons from "./inputButtonsReducer";
import filterReducer from "./filtersReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    inputButtons,
    filterReducer,
})

export default allReducers;
