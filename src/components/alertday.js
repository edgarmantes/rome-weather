import React, { Component } from 'react';

export default class AlertDay extends Component {
	render() {
		return (
			<li className="alertday-item{key}" >
				<p className="alert-day">{this.props.day}</p>
				<p className="alert-temp">high of: {this.props.fahr}{this.props.cel}{this.props.unit}</p>
				<img src="http://openweathermap.org/img/w/02d.png" />
			</li>	
		);
	}
}
