/* global google */
import { default as React, Component } from "react";

export default class Pollut extends Component {


	render() {

		return (
			<div className="pollut-container" >

				<p>CO: {this.props.co}ppm</p>
				<p>NO2: {this.props.no}ppm</p>
			</div>
		);
	}
}

