import {combineReducers } from 'redux';
import {authentication} from './authentication.reducer';
import {registration} from "./registration.reducer";
import {business} from './business.reducer';
import {alert} from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    business
});

export default rootReducer;