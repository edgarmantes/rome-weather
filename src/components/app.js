import React, { Component } from 'react';
import Header from './header';
import Tabs from './tabs';
import renderer from 'react-test-renderer'

export default class App extends Component {
	constructor (){
		super()
	}
	
	render() {
		return (
			<div className="app-container">
				<Header />
				{this.props.children}
			</div>
		);
	}
}
