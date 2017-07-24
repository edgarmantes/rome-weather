
/* global google */
import { default as React, Component } from "react";
import Map from './map';

export default class Precip extends Component {
	constructor (){
		super()
	}

	render() {

		return (
			<div className="Precip-container">
				<Map />
			</div>			
		);
	}
}



