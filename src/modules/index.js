import { combineReducers } from 'redux'
import counterReducer from './counter';
import employeeReducer from './employee';

export default combineReducers({
    counter: counterReducer,
    employee: employeeReducer
})