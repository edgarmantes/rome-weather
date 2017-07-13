import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAlerts from '../actions/getAlerts'

// Components
import AlertDay from './alertday';

class Alerts extends Component {

	componentDidMount(){
		this.props.dispatch(getAlerts())
		// this.toFahrenheit(this.props.getAlerts.alerts);
	}

	componentMount(){
		// this.toFahrenheit(this.props.getAlerts.alerts);
	}

	toFahrenheit(list){
		alertList = list.map( (data)=>{
			let fahr = data.hi;
			let cel = '';
			return <AlertDay fahr={fahr} cel={cel} unit={<span>&#8457;</span>}/>
		})
		
	}

	toCelcius(list){

	}

	render() {
		let fahr;
		let cel;
		let unit;

		let alertList;
		console.log(this.props.unit)
				// This Changes the values celcius, fahrenheit or both. Also changes the units
		if(this.props.unit ==="F" && (!(typeof(this.props.unit)==="string")) ){
	// 		// Initial units
			console.log("F")
	// 		this.props.dispatch(changeUnit(<span>&#8457;</span>))
	// 		this.props.dispatch(convertData(data))
		} else if(this.props.unit === "C"  && (!(typeof(this.props.unit)==="string"))){
	// 		// change units to Celcius
	console.log("C")
	// 		this.props.dispatch(changeUnit(<span>&#8451;</span>))
	// 		this.props.dispatch(convertData(data))
		} else if(this.props.unit === "Both"){
			console.log("Both")
	// 		// Changes to both units
	// 		this.props.dispatch(changeUnit(<span>&#8457; / &#8451;</span>))
	// 		this.props.dispatch(convertData(data))
		} else {
			switch(this.props.unit){
				case 'F':
				console.log("F")
	// 				this.props.dispatch(getCurrentData("Imperial"));
	// 				this.props.dispatch(changeUnit(<span>&#8457;</span>))
	// 				return
				case 'C':
				console.log("C")
	// 				this.props.dispatch(getCurrentData("Metric"));
	// 				this.props.dispatch(changeUnit(<span>&#8451;</span>))

					return
			}			
		}
		if ((this.props.alerts))
		alertList = this.props.alerts.map( (data, index)=>{
			let fahr = data.hi;
			let cel = '';
			let day;
			switch(data.date[0]){
				case "Mon":
					day = "Monday"
				case "Tue":
					day = "Tuesday"
				case "Wed":
					day = "Wednesday"
				case "Thu":
					day = "Wednesday"
				case "Fri":
					day = "Friday"
				case "Sat":
					day = "Saturday"
				case "Sun":
					day = "Sunday"
						
			}
			return <AlertDay key={index} day={day} fahr={fahr} cel={cel} unit={<span>&#8457;</span>}/>
		})
		
		return (
			<div className="alerts-container">
				<h1 className="alerts-hdr">Days over 70&#176;</h1>
				<ul>
					{alertList}
				</ul>
			</div>
		);
	}
}



function mapStateToProps(state, props) {
	console.log('state',state)
	return {
		alerts: state.getAlerts.alerts,
		unit: state.currentTemp.unit
	}
}


export default connect(mapStateToProps)(Alerts)

			
// Make API POST call to openweathermap for alerts
