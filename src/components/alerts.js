import React, { Component } from 'react';

// Components


class Alerts extends Component {
	render() {
		return (
			<div className="Alerts-container">
				Alerts
			</div>
		);
	}
}


function mapStateToProps(state, props) {
	return {

	}
}


export default connect(mapStateToProps)(Alerts)

			
// Make API call to openweathermap for alerts
