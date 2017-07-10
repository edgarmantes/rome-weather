
/* global google */
import { default as React, Component } from "react";
import Map from './map';

console.log("<Mapped/>",<Map/>)

export default class Precip extends Component {


	render() {
		// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
		console.log("precip",Map)
		return (
			<div className="Precip-container">
				<h1>Precipitation Map</h1>
				<Map />
			</div>			
		);
	}
}



