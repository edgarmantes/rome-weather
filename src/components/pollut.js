/* global google */
import { default as React, Component } from "react";

export default class Pollut extends Component {


	render() {

		return (
			<div className="pollut-container" >
				<h3>Carbon Monoxide at sea level:</h3>
				<p>{this.props.co}ppm</p>
			</div>
		);
	}
}

