export default function(state={}, action){

	switch(action.type){
		case 'CHANGED_UNIT':
			
			return  Object.assign( {}, state, {
				unit: action.payload
			})

		default:
			return state
	}

	return state;
}