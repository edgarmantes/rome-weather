import { combineReducers } from 'redux';

// Reducers
import CurrentDataReducer from './reducer_currentdata';
import FiveDayReducer from './reducer_fiveday';
import ChangeUnit from './reducer_changeunit';

let initialState = {
	currentTemp: null
}

const rootReducer = combineReducers({

	currentTemp: CurrentDataReducer,
	fiveDay: FiveDayReducer,
	changeUnit: ChangeUnit

});

export default rootReducer;
