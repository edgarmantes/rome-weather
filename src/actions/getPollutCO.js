
function resolvedPollutCO(data) {
	return {
		type: 'GET_POLLUT_CO',
		payload: data
	}

}

export default function getPollutCO(){

	const URL = "http://api.openweathermap.org/pollution/v1/co/41,12/current.json?appid=698009a4dde62e48490582289f422bd2";
	console.log('GET_CO')
	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			console.log('action_pollut', object)
			let data = {
				conc: object.data[0].value
			}
			console.log("actions_no",object)
			return dispatch(resolvedPollutCO(data))
			
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}


}