export default function(state={}, action){

	switch(action.type){
		case 'GET_ALERTS':
						
			let query = action.payload.object.filter(function(object){
					return object.conditions[0]._id === "5966a1fb33d810006484033b"
			})

			// Array of dates as a string in UTC format
			let alertsList = query[0].alerts;

			let myAlerts = Object.values(alertsList).reverse().map(function(alert){			
				// grab UTC date as String
				let dat = new Date(alert.date).toString();
				
				// grabs high temp if that day
				let hi = alert.conditions[0].current_value.max
				let unit;

				if(action.payload.unit==='F') {
					unit = Math.ceil(((hi - 273.15) * 1.8) + 32)
				} else if (action.payload.unit==='C'){
					unit = Math.ceil(hi - 273.15)
				} else {
					unit = Math.ceil(((hi - 273.15) * 1.8) + 32)+"/"+Math.ceil(hi - 273.15)
				}

				// passes object with data and high temp for each day
				let data = {
					date: dat,
					hi: unit
				}
				return data
			})

			// Array of UTC dates of first 70 degree occurance of each day
			const dataArray=[];
			let date;
			let hi;
			let dayAlerts = myAlerts.filter( (day)=>{
				let object = Object(day);
				let dateSplit = object.date.split(" ");

				if( !(date === dateSplit[2]) ){
				
					date = dateSplit[2];
					// object of each days dat(string) and high temp(number)
					let values = {
						date: dateSplit,
						hi: object.hi
					}

					dataArray.push(values);
				}

				return
			})

			return  Object.assign( {}, state, {
				alerts: dataArray
			})

		default:
			return state
	}

	return state;
}