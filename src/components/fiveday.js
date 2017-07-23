import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import DayCast from './daycast';

class FiveDay extends Component {
	constructor (){
		super()
	}

	render() {
		
		let daylist;	

		if(!this.props.daysList){
			daylist = "Waiting..."			
			

		} else {

			daylist = this.props.daysList.object.list.map( (data, index) => {
				let date = new Date();
				let day = date.getDay();		
				let hi;
				let lo;
				let myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
				let weekday;

				if ((day+index)<myDays.length){
					weekday = myDays[day+index]
				} else {
					weekday = myDays[(day+index)-7]

				}
				
				if(this.props.changeUnitTo==="℉/℃"){
					if(this.props.daysList.unit === 'Imperial'){

							hi = Math.ceil(data.temp.max)+"/"+Math.ceil(((data.temp.max) - 32) * 5/9).toString();
							lo = Math.ceil(data.temp.min)+"/"+Math.ceil(((data.temp.min) - 32) * 5/9).toString();

					} else if (this.props.daysList.unit === 'Metric') {
							hi = Math.ceil( (data.temp.min) * 1.8 + 32 )+"/"+Math.ceil(data.temp.max).toString();
							lo = Math.ceil( (data.temp.min) * 1.8 + 32 )+"/"+Math.ceil(data.temp.min).toString();
					}					
				} else if (this.props.changeUnitTo==="℉" && (this.props.unit === undefined)){
				
					hi = Math.ceil(data.temp.max);
					lo = Math.ceil(data.temp.min);
				} else if (this.props.changeUnitTo==="℉" && (this.props.daysList.unit === 'Imperial')){
	
					hi = Math.ceil(data.temp.max);
					lo = Math.ceil(data.temp.min);	
				} else if (this.props.changeUnitTo==="℉" && this.props.daysList.unit === 'Metric') {
					
					hi = Math.ceil(((data.temp.max) - 32) * 5/9).toString();
					lo = Math.ceil(((data.temp.min) - 32) * 5/9).toString();
				} else if (this.props.changeUnitTo=== "℃" && this.props.daysList.unit === 'Metric') { // Celsius

					hi = Math.ceil(data.temp.max);
					lo = Math.ceil(data.temp.min);
				} else if (this.props.changeUnitTo=== "℃" && this.props.daysList.unit === 'Imperial') {

					hi = Math.ceil( (data.temp.min) * 1.8 + 32 );
					lo = Math.ceil( (data.temp.min) * 1.8 + 32 );
				}
	
				return <DayCast key={index} name={index} day={weekday} hi={hi} lo={lo} icon={data.weather[0].icon}/>
			
			})		
		
		}

		return (
			<div className="fiveday-container col-6">
				<ul>
					{daylist}
				</ul>
			</div>
		);
	}
}


function mapStateToProps(state, props) {

	return {
		daysList: state.fiveDay.daysList,
		unit: state.unit,
		changeUnitTo: state.changeUnit.unit.props.children
	}
}


export default connect(mapStateToProps)(FiveDay)
