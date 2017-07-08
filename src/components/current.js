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
		
		let Temp;

		if(!this.props.currentTemp){
			Temp = "Wait..."
		} else {
			Temp = this.props.currentTemp
		}	

		return (
			<div className="current-container">
				<div className="current-temp">75<span>&#8457;</span></div>
				<div className="current-range">
					<span className="current-hi">hi:80/</span><span>lo:50</span>
				</div>
			</div>
		);	

	}
}


function mapStateToProps(state, props) {

	return {
		currentTemp: state.currentTemp.temp//.currentTemp | null
		// currentHumidity:
		// hi:
		// low:
		// sky:
		// windSpped:
		// windDirec:
	}
}


export default connect(mapStateToProps)(Current)

									