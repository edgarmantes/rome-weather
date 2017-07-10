

function resolvedFiveDay(data) {
	return {
		type: 'GET_FIVE_DAY',
		payload: data
	}

}

export default function getFiveDay(){

	const URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=London&cnt=5&units=imperial&appid=698009a4dde62e48490582289f422bd2";

	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			return dispatch(resolvedFiveDay(object))
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}


}