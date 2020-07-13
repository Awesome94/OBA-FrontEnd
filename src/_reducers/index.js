import {combineReducers } from 'redux';
import {authentication} from './authentication.reducer';
import {registration} from "./registration.reducer";
import {business} from './business.reducer';
import {uploadCsv} from './upload.reducer';
import {alert} from './alert.reducer';
import updateData from './update.reducer';
import { chartData } from "./charts.reducer";

const rootReducer = combineReducers({
    authentication,
    registration,
    alert,
    business,
    uploadCsv,
    updateData,
    chartData
});

export default rootReducer;