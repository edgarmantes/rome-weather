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
		case 'GET_POLLUT_NO':
			let str = action.payload.conc.toString();
			let spl = str.split("e");
			let numb = Number(spl[0]).toFixed(2);
			let shorten = numb+"e"+Number(spl[1]);
			return Object.assign( {}, state, {
				no: shorten
			})

		default:
			return state
	}

	return state;
}