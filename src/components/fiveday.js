import React, { Component } from 'react';
import { connect } from 'react-redux';

// components
import DayCast from './daycast';

class FiveDay extends Component {

	render() {
		
		let daylist;	

		if(!this.props.daysList){
			daylist = "Waiting..."			
			
		} else {

			daylist = this.props.daysList.map( function(data, index) {
				let date = new Date();
				let day = date.getDay();
				
				let hi = Math.ceil(data.temp.max);
				let lo = Math.ceil(data.temp.min);
				let myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

				let weekday = myDays[day+index+1]

				return <DayCast key={index} day={weekday} hi={hi} lo={lo} icon={data.weather[0].icon}/>
			
			})		
		
		}

		return (
			<div className="fiveday-container">
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
		unit: state.unit
	}
}


export default connect(mapStateToProps)(FiveDay)
