import React, { Component } from 'react';

export default class DayCast extends Component {
	render() {

		let source = "http://openweathermap.org/img/w/"+this.props.icon+".png"

		return (
			<li className={this.props.key}>
				<span className="five-day">{this.props.day}</span>
				<div className="five-temps">
					<p className="five-hi">hi:{this.props.hi}&#176;</p>
					<p className="five-lo">lo:{this.props.lo}&#176;</p>
					
				</div>
				<div className="five-img-cont">
					<img className="five-img" src={source} />
				</div>
			</li>
		);
	}
}

