
function resolvedPollutNO(data) {
	return {
		type: 'GET_POLLUT_NO',
		payload: data
	}

}

export default function getPollutNO(){
	let d = new Date();
	let date = d.toISOString();

	const URL = "http://api.openweathermap.org/pollution/v1/no2/41,12/"+date+".json?appid=698009a4dde62e48490582289f422bd2";
	console.log('GET_NO')
	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			console.log('action_pollutNO', object)
			let data = {
				conc: object.data[0].value
			}
			console.log("actions_no",object)
			return dispatch(resolvedPollutNO(data))
			
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}


}