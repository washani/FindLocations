import { combineReducers } from "redux";
import locationReducer from './LocationInfo/reducer';

const rootReducer = combineReducers({
    locationReducer: locationReducer,
});

export default rootReducer;