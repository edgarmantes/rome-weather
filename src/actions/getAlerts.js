
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
			
			let query = object.filter(function(object){
					
				return object.conditions[0]._id === "5963fe7891f06a005b5834b2"
				
			})

			// let alertsList = query[0].filter( function(object){
			// 		console.log(object)
			// 	return object
			// })

			console.log("actions_alerts",query[0].alerts, object)
			return dispatch(resolvedGetAlert(object))
		}).catch( (error) => {
			alert(error)
			return console.log(error)
		})
	}

}