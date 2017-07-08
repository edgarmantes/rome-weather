export default function(state={}, action){

	console.log("reducer_fiveday",action)	
	switch(action.type){
		case 'GET_FIVE_DAY':
			console.log('reducer_fiveday', action.payload)
			return state // Object.assign( {}, state, {
				//temp : action.payload.main.temp,
				//humidity: action.payload.main.humidity
			//})

		default:
			return state
	}

	return state;
}