

function resolvedCurrentData(data) {
	return {
		type: 'GET_CURRENT_DATA',
		payload: data
	}

}

export default function getCurrentData(){

	const URL = "http://api.openweathermap.org/data/2.5/weather?q=Rome,IT&units=Imperial&APPID=698009a4dde62e48490582289f422bd2";

	return dispatch => {
		return fetch(URL).then( (response) => response.json()
		).then( 
			(object) => dispatch(resolvedCurrentData(object))
		).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}

}