
function resolvedPollutCO(data) {
	return {
		type: 'GET_POLLUT_CO',
		payload: data
	}

}

export default function getPollutCO(){

	const URL = "http://api.openweathermap.org/pollution/v1/co/41,12/current.json?appid=698009a4dde62e48490582289f422bd2";

	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			let data = {
				conc: object.data[0].value
			}
			return dispatch(resolvedPollutCO(data))			
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}


}