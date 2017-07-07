import React, { Component } from 'react';

import Current from './current';
import FiveDay from './fiveday';

export default class Forecast extends Component {
	render() {
		return (
			<div className="Precip-container">
				<Current />
				<FiveDay />
			</div>
		);
	}
}

