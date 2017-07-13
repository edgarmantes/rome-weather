import { combineReducers } from 'redux';

// Reducers
import CurrentDataReducer from './reducer_currentdata';
import FiveDayReducer from './reducer_fiveday';
import ChangeUnit from './reducer_changeunit';
import GetPollut from './reducer_pollut';
import GetAlerts from './reducer_getalerts';

let initialState = {
	currentTemp: null
}

const rootReducer = combineReducers({

	currentTemp: CurrentDataReducer,
	fiveDay: FiveDayReducer,
	changeUnit: ChangeUnit,
	getPollut: GetPollut,
	getAlerts: GetAlerts
});

export default rootReducer;
