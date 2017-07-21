import React, { Component } from 'react';

// Components
import Current from './current';
import FiveDay from './fiveday';
import Alerts from './alerts';

export default class Forecast extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className="Precip-container">
				<Current />
				<FiveDay />
				<Alerts />
			</div>
		);
	}
}

