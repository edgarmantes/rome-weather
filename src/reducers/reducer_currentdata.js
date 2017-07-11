export default function(state={}, action){
	function c(num){
		return (num-32) * 5 / 9;
	}

	function f(num){
		return num  * 9 / 5 + 32; 
	}


	// let ftemp = f(action.payload.temp);
	// let fhumidity = f(action.payload.humidity);
	// let fhi= f(action.payload.hi);
	// let flo = f(action.payload.lo);

	// let ctemp = c(action.payload.temp);
	// let chumidity = c(action.payload.humidity);
	// let chi= c(action.payload.hi);
	// let clo = c(action.payload.lo);


	console.log("reducer_currentdata",action)
	switch(action.type){



		case 'GET_CURRENT_DATA':

			return Object.assign( {}, state, {
				temp : action.payload.main.temp,
				humidity: action.payload.main.humidity,
				hi: action.payload.main.temp_max,
				lo: action.payload.main.temp_min

			})

		case 'CONVERT_CURRENT_DATA':
			let ftemp = Math.ceil(f(action.payload.temp));
			let fhumidity = Math.ceil(f(action.payload.humidity));
			let fhi= Math.ceil(f(action.payload.hi));
			let flo = Math.ceil(f(action.payload.lo));

			let ctemp = Math.ceil(c(action.payload.temp));
			let chumidity = Math.ceil(c(action.payload.humidity));
			let chi= Math.ceil(c(action.payload.hi));
			let clo = Math.ceil(c(action.payload.lo));

			switch(action.payload.unit){

				case 'F':
					return Object.assign( {}, state, {
						temp : ftemp,
						humidity: fhumidity,
						hi: fhi,
						lo: flo

					})
				case 'C':
					return Object.assign( {}, state, {
						temp : ctemp,
						humidity: chumidity,
						hi: chi,
						lo: clo

					})
				case 'Both':
					return Object.assign( {}, state, {
						temp : ftemp+"/"+ctemp,
						humidity: fhumidity+"/"+chumidity,
						hi: fhi+"/"+chi,
						lo: flo+"/"+clo

					})					
			}
			return state
		default:
			return state
	}

	return state;
}