
function resolvedGetAlert(data){
	return {
		type: 'GET_ALERTS',
		payload: data
	}
}

export default function getAlerts(){

	const URL = "http://api.openweathermap.org/data/3.0/triggers?appid=698009a4dde62e48490582289f422bd2";

	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			return dispatch(resolvedGetAlert(object))
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}

}
