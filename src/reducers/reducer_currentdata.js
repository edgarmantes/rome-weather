export default function(state={}, action){


	switch(action.type){
		case 'GET_CURRENT_DATA':
			// console.log('reducer_currentdata', action.payload)
			return Object.assign( {}, state, {
				temp : action.payload.main.temp,
				humidity: action.payload.main.humidity,
				hi: action.payload.main.temp_max,
				lo: action.payload.main.temp_min

			})

		default:
			return state
	}

	return state;
}