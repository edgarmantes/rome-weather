export default function(state={}, action){

	switch(action.type){
		case 'GET_POLLUT_CO':
					
			let string = action.payload.conc.toString();
			let split = string.split("e");
			let num = Number(split[0]).toFixed(2);
			let short = num+"e"+Number(split[1]);
			return Object.assign( {}, state, {
				co: short
			})

		default:
			return state
	}

	return state;
}