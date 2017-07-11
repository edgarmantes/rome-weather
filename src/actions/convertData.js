export default function convertUnit(data){
	console.log("action/convert",data)
	return {
		type: 'CONVERT_CURRENT_DATA',
		payload: data
	}


}