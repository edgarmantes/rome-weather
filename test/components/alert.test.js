import React from 'react';
import { Provider } from 'react-redux';
import Alerts from '../../src/components/alerts';

import configureStore from 'redux-mock-store';

describe('<Alerts />' , () => {
	const initialState ={
		alerts: "5",
		unit: "C",
		tempValue: "75"
	}
	const mockStore = configureStore();
	let store,wrapper

	beforeEach( ()=>{
		store = mockStore(initialState);
		wrapper = mount( <Provider store={store}><Alerts /></Provider> )
	})

	it('render the connected(SMART) component', () => {
       expect(wrapper.find(ConnectedHome).length).toEqual(1)
    });

	// it('Renders Alerts component properly', () => {
	// 	shallow(<Alerts />)
	// });

	// it("Renders with correct props.day value", () => {
	// 	const day = "Friday";
	// 	const wrapper = mount(<AlertDay day={day} />);
	// 	expect(wrapper.find(".alert-day").text()).toEqual(day)
	// })

	// it("Renders with correct props.date value", () => {
	// 	const day = "17";
	// 	const wrapper = mount(<AlertDay date={day} />);
	// 	expect(wrapper.find(".alert-date").text()).toEqual(day)
	// })

	// it("Renders with correct props.fahr value", () => {
	// 	const fahr = "80";
	// 	const output = "high of: 80";
	// 	const wrapper = mount(<AlertDay fahr={fahr} />);
	// 	expect(wrapper.find(".alert-temp").text()).toEqual(output)
	// })

	// it("Renders with correct props.date value", () => {
	// 	const unit = "&#8457";
	// 	const output = "high of: &#8457";
	// 	const wrapper = mount(<AlertDay unit={unit} />);
	// 	expect(wrapper.find(".alert-temp").text()).toEqual(output)
	// })

});