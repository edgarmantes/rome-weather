import React, { Component } from 'react';
import { connect } from 'react-redux';
import getAlerts from '../actions/getAlerts'

// Components
import AlertDay from './alertday';

class Alerts extends Component {

	componentDidMount(){
		this.props.dispatch(getAlerts('F'))
		// this.toFahrenheit(this.props.getAlerts.alerts);

	}

	handleChange(unit){
		this.props.dispatch(getAlerts(unit))
	}


	render() {

		let alertList;

		if (this.props.alerts) {
			alertList = this.props.alerts.map( (data, index)=>{
				let fahr = data.hi;
				let cel = '';
				let day = data.date[0] + ", " 
				let date = data.date[1] + "/" + data.date[2];
				let unit = this.props.unit

				return <AlertDay key={index} day={day}  date={date} fahr={fahr}  unit={unit}/>
			})			
		}

		
		return (
			<div className="alerts-container col-6">
				<h1 className="alerts-hdr">Days over 70&#8457; / 21&#8451;</h1>
				<ul>
					{alertList}
				</ul>
			</div>
		);
	}
}



function mapStateToProps(state, props) {

	return {
		alerts: state.getAlerts.alerts,
		unit: state.changeUnit.unit.props.children,
		tempValue: state.currentTemp.unit
	}
}


export default connect(mapStateToProps)(Alerts)

			