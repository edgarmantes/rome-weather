import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Action Creators
import  getCurrentData  from '../actions/getCurrentData';
import getFiveDay from '../actions/getFiveDay';
import changeUnit from '../actions/changeUnit';
import convertData from '../actions/convertData';

// Component 
import Pollut from './pollut';

class Current extends Component {

	constructor (props){
		super(props);
		this.state = {value: this.props.unit};
		this.props = {unit:<span>&#8457;</span>};
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){

		this.props.dispatch(getCurrentData("Imperial"));
		this.props.dispatch(getFiveDay());
	}

	componentWillMount(){
		this.props.dispatch(changeUnit(<span>&#8457;</span>))
	}

	handleChange(event) {

		let data = {
			temp: this.props.currentTemp,
			humidity: this.props.currentHumidity,
			hi: this.props.currentHi,
			lo: this.props.currentLow,
			unit: event.target.value
		}

		if(event.target.value ==="F" && (!(typeof(this.props.currentTemp)==="string")) ){
			
			this.props.dispatch(changeUnit(<span>&#8457;</span>))
			this.props.dispatch(convertData(data))
		} else if(event.target.value === "C"  && (!(typeof(this.props.currentTemp)==="string"))){
			this.props.dispatch(changeUnit(<span>&#8451;</span>))
			this.props.dispatch(convertData(data))
		} else if(event.target.value === "Both"){
			this.props.dispatch(changeUnit(<span>&#8457; / &#8451;</span>))
			this.props.dispatch(convertData(data))
		} else {
			switch(event.target.value){
				case 'F':
					this.props.dispatch(getCurrentData("Imperial"));
					this.props.dispatch(changeUnit(<span>&#8457;</span>))
					return
				case 'C':
					this.props.dispatch(getCurrentData("Metric"));
					this.props.dispatch(changeUnit(<span>&#8451;</span>))

					return
			}
			
		}
		
	}


	render() {
		
		var currentTemp;
		var currentHumidity;
		var currentHi;
		var currentLow;


		if(!this.props.currentTemp && this.props.currentTemp===undefined){
			currentTemp = "Wait..."
		} else if(typeof(this.props.currentTemp)===Number){
			currentTemp = this.props.currentTemp;
			currentHumidity = this.props.currentHumidity;
			currentHi = this.props.currentHi;
			currentLow = this.props.currentLow
		} else {
			currentTemp = this.props.currentTemp;
			currentHumidity = this.props.currentHumidity;
			currentHi = this.props.currentHi;
			currentLow = this.props.currentLow
		}

		return (
			<div className="current-container">
				<div className="current-weather">
					<div className="current-temp">{currentTemp}<span className="current-symb">{this.props.unit}</span></div>
					<div className="current-range">
						<span className="current-hi">hi:{currentHi}&#176;/</span><span>lo:{currentLow}&#176;</span>
					</div>
					<div className="current-humidity">hum:{currentHumidity}&#37;</div>				
				</div>
				<select value={this.state.value} onChange={this.handleChange}>
				  <option value="F">F&#176;</option>
				  <option value="C">C&#176;</option>
				  <option value="Both">F&#176;/C&#176;</option>
				</select>
				<Pollut />
			</div>
		);	

	}
}


function mapStateToProps(state, props) {

	return {
		currentTemp: state.currentTemp.temp,
		currentHumidity: state.currentTemp.humidity,
		currentHi: state.currentTemp.hi,
		currentLow: state.currentTemp.lo,
		unit: state.changeUnit.unit
	}
}


export default connect(mapStateToProps)(Current)

									