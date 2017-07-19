import React, { Component } from 'react';

export default class AlertDay extends Component {
	render() {
		return (
			<li className="alertday-item{key}" >
				<p className="alert-day">{this.props.day}<span className="alert-date">{this.props.date}</span></p>
				<p className="alert-temp">high of: {this.props.fahr}{this.props.unit}</p>	
			</li>	
		);
	}
}
