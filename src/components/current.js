import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import  getCurrentData  from '../actions/getCurrentData';
import getFiveDay from '../actions/getFiveDay';

class Current extends Component {

	componentDidMount(){

		this.props.dispatch(getCurrentData());
		this.props.dispatch(getFiveDay());
	}

	render() {
		
		let currentTemp;
		let currentHumidity;
		let currentHi;
		let currentLow;

		if(!this.props.currentTemp){
			currentTemp = "Wait..."
		} else {
			currentTemp = Math.ceil(this.props.currentTemp);
			currentHumidity = Math.ceil(this.props.currentHumidity);
			currentHi = Math.ceil(this.props.currentHi);
			currentLow = Math.ceil(this.props.currentLow)
		}	

		return (
			<div className="current-container">
				<div className="current-temp">{currentTemp}<span>&#8457;</span></div>
				<div className="current-range">
					<span className="current-hi">hi:{currentHi}/</span><span>lo:{currentLow}</span>
				</div>
				<div className="current-humidity">hum:{currentHumidity}&#176;</div>
			</div>
		);	

	}
}


function mapStateToProps(state, props) {
	return {
		currentTemp: state.currentTemp.temp,
		currentHumidity: state.currentTemp.humidity,
		currentHi: state.currentTemp.hi,
		currentLow: state.currentTemp.lo,
	}
}


export default connect(mapStateToProps)(Current)

									