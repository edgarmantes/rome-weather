
/* global google */
import { default as React, Component } from "react";
import Map from './map';

export default class Precip extends Component {


	render() {

		return (
			<div className="Precip-container">
				<h1>Precipitation Map</h1>
				<Map />
			</div>			
		);
	}
}



