import React from 'react';
import { Provider } from 'react-redux';
import FiveDayContainer, { FiveDay } from '../../src/components/fiveday';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';

describe('<FiveDayContainer />' , () => {
	const initialState ={
		fiveDay : { daysList: [] },
		unit : "C",
		changeUnit : { unit : { props : { children : "F"}}}
	}
	const mockStore = configureStore();
	let store,wrapper

    beforeEach(()=>{
        store = mockStore(initialState)
        wrapper = shallow( <FiveDayContainer store={store} /> )
    })

    it('Render the connected(SMART) component', () => {
       expect(wrapper.length).toEqual(1)
    });

	it('Renders FiveDay component properly', () => {
		shallow(<FiveDay dispatch={jest.fn()} />)
	});

	it("Renders with correct state.fiveDay.daysList value", () => {
		expect(wrapper.node.props.store.getState().fiveDay.daysList).toBe(initialState.fiveDay.daysList)
	})

	it("Renders with correct state.unit value", () => {
		expect(wrapper.node.props.store.getState().unit).toBe(initialState.unit)
	})

	it("Renders with correct state.getAlerts.alerts value", () => {
		expect(wrapper.node.props.store.getState().changeUnit.unit.props.children).toBe(initialState.changeUnit.unit.props.children)
	})

	it('Snapshot of FiveDay', () => {
        const renderedValue =  renderer.create(<FiveDay />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});
