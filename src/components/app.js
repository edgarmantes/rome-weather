import React, { Component } from 'react';
import Header from './header';
import Tabs from './tabs';

export default class App extends Component {
	render() {
		return (
			<div className="app-container">
				<Header />
				{this.props.children}
			</div>
		);
	}
}
