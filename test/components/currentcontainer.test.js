import React from 'react';
import { Provider } from 'react-redux';
import CurrentContainer, { Current } from '../../src/components/current';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

describe('<CurrentContainer />' , () => {
	const initialState ={
		currentTemp : 
			{ 
				temp : 80,
				humidity : 60,
				hi : 90,
				lo : 60
			},
		changeUnit : { unit : "C"},
		getPollut : { co : 8.168363052618588e-8 }
	}
	const mockStore = configureStore();
	let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow( <CurrentContainer store={store} dispatch={jest.fn()} /> )
    })

    it('Render the connected(SMART) component', () => {
       expect(wrapper.length).toEqual(1)
    });


	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().currentTemp.temp).toBe(initialState.currentTemp.temp)
	})

	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().currentTemp.humidity).toBe(initialState.currentTemp.humidity)
	})

	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().currentTemp.hi).toBe(initialState.currentTemp.hi)
	})

	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().currentTemp.lo).toBe(initialState.currentTemp.lo)
	})

	it("Renders with correct state.changeUnit.unit.props.children value", () => {
		expect(wrapper.node.props.store.getState().changeUnit.unit).toBe(initialState.changeUnit.unit)
	})

	it("Renders with correct state.currentTemp.unit value", () => {
		expect(wrapper.node.props.store.getState().getPollut.co).toBe(initialState.getPollut.co)
	})


});
