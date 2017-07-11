import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components


class Alerts extends Component {
	render() {
		return (
			<div className="alerts-container">
				<h1 className="alerts-hdr">Days over 70&#176;</h1>
				<ul>
					<li className="alert-item">
						<p className="alert-day">Monday</p>
						<p className="alert-temp">high of: 72&#176;</p>
						<img src="http://openweathermap.org/img/w/02d.png" />
					</li>					
				</ul>
			</div>
		);
	}
}


function mapStateToProps(state, props) {
	return {

	}
}


export default connect(mapStateToProps)(Alerts)

			
// Make API POST call to openweathermap for alerts
