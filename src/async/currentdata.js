import fetch from 'isomorphic-fetch';

// Action Creator
// import CurrentData from '../actions/getCurrentData';

const getCurrentData = () =>{
	
	const URL = "http://api.openweathermap.org/data/2.5/weather?q=Rome,IT&units=Imperial&APPID=698009a4dde62e48490582289f422bd2";

	return fetch(URL).then(function(response){
		return response.json();
	
	}).then(function(object){
		
		return object

	}).catch(function(error){

		alert(error)
		return console.log(error)

	})

}


export default getCurrentData