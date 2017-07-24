import React from 'react';
import { Provider } from 'react-redux';
import AlertsContainer, { Alerts } from '../../src/components/alerts';
import renderer from 'react-test-renderer';

import getAlerts from '../../src/actions/getAlerts';

import configureStore from 'redux-mock-store';

describe('<Alerts />' , () => {
	const initialState ={

		getAlerts:{
			alerts : [
				{
	  				"date": ["Mon", "Dec", "19", "2016", "15:00:00", "GMT-0600", "(Central", "Standard", "Time)"], 
	  				"hi": "-9"
	  			},
	  			{
	  				"date": ["Mon", "Dec", "19", "2016", "15:00:00", "GMT-0600", "(Central", "Standard", "Time)"], 
	  				"hi": "-9"
	  			},
	  			{
	  				"date": ["Mon", "Dec", "19", "2016", "15:00:00", "GMT-0600", "(Central", "Standard", "Time)"], 
	  				"hi": "-9"
	  			},
	  			{
	  				"date": ["Mon", "Dec", "19", "2016", "15:00:00", "GMT-0600", "(Central", "Standard", "Time)"], 
	  				"hi": "-9"
	  			},
	  			{
	  				"date": ["Mon", "Dec", "19", "2016", "15:00:00", "GMT-0600", "(Central", "Standard", "Time)"], 
	  				"hi": "-9"
	  			}

			]
		}, 
		changeUnit : {
			unit : {
				props : {
					children : "F"
				}
			}
		},
		currentTemp : { unit : "80" } 
	}
	const mockStore = configureStore();
	let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow( <AlertsContainer store={store} /> )

    })

    it('Render the connected(SMART) component', () => {

       expect(wrapper.length).toEqual(1)
    });

	it('Renders Alerts component properly', () => {
		shallow(<Alerts />)
	});

	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().getAlerts.alerts).toBe(initialState.getAlerts.alerts)
	})

	it("Renders with correct state.changeUnit.unit.props.children value", () => {
		expect(wrapper.node.props.store.getState().changeUnit.unit.props.children).toBe(initialState.changeUnit.unit.props.children)
	})

	it("Renders with correct state.currentTemp.unit value", () => {
		expect(wrapper.node.props.store.getState().currentTemp.unit).toBe(initialState.currentTemp.unit)
	})

	it('Snapshot of Alerts', () => {
		const wrapper = ''
        const renderedValue =  renderer.create(<Alerts dispatch={jest.fn()} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    }); 

});
