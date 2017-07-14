

function resolvedFiveDay(data) {
	return {
		type: 'GET_FIVE_DAY',
		payload: data
	}

}

export default function getFiveDay(unit){

	const URL = "http://api.openweathermap.org/data/2.5/forecast/daily?q=Rome,IT&cnt=5&units="+unit+"&appid=698009a4dde62e48490582289f422bd2";

	return dispatch => {
		return fetch(URL).then(  
			response => response.json()		
		).then( (object) => {
			let data ={
				unit: unit,
				object: object
			}

			return dispatch(resolvedFiveDay(data))
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}


}