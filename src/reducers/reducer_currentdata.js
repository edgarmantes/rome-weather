

export default function(state={}, action){
	function c(num){
		return (num-32) * 5 / 9;
	}

	function f(num){
		return num  * 9 / 5 + 32; 
	}


	switch(action.type){

		case 'GET_CURRENT_DATA':

			return Object.assign( {}, state, {
				temp : Math.ceil(action.payload.main.temp),
				humidity: Math.ceil(action.payload.main.humidity),
				hi: Math.ceil(action.payload.main.temp_max),
				lo: Math.ceil(action.payload.main.temp_min),
			})

		case 'CONVERT_CURRENT_DATA':
			let ftemp = Math.ceil(f(action.payload.temp));
			let fhumidity = Math.ceil(action.payload.humidity);
			let fhi= Math.ceil(f(action.payload.hi));
			let flo = Math.ceil(f(action.payload.lo));

			let ctemp = Math.ceil(c(action.payload.temp));
			let chumidity = Math.ceil(action.payload.humidity);
			let chi= Math.ceil(c(action.payload.hi));
			let clo = Math.ceil(c(action.payload.lo));

			switch(action.payload.unit){

				case 'F':
					return Object.assign( {}, state, {
						temp : ftemp,
						humidity: fhumidity,
						hi: fhi,
						lo: flo,
						unit: action.payload.unit

					})
		
				case 'C':
					return Object.assign( {}, state, {
						temp : ctemp,
						humidity: chumidity,
						hi: chi,
						lo: clo,
						unit: action.payload.unit

					})

				case 'Both':
					switch(state.unit){
						case 'F' || undefined:
							return Object.assign( {}, state, {
								temp : state.temp+"/"+ctemp,
								humidity: state.humidity,
								hi: state.hi+"/"+chi,
								lo: state.lo+"/"+clo,
								unit: action.payload.unit
							})
						case 'C':
							return Object.assign( {}, state, {
								temp : ftemp+"/"+state.temp,
								humidity: state.humidity,
								hi: fhi+"/"+state.hi,
								lo: flo+"/"+state.lo,
								unit: action.payload.unit

							})	
					}
									
			}
			return state
		default:
			return state
	}

	return state;
}