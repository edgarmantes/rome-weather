import { combineReducers } from 'redux';

// Reducers
import CurrentDataReducer from './reducer_currentdata';
import FiveDayReducer from './reducer_fiveday';

let initialState = {
	currentTemp: null
}

const rootReducer = combineReducers({

	currentTemp: CurrentDataReducer,
	fiveDay: FiveDayReducer

});

export default rootReducer;
