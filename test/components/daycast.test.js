import React from 'react'
import renderer from 'react-test-renderer';
import DayCast from '../../src/components/daycast';

describe('<DayCast />' , () => {


	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<DayCast day={"Friday"} hi={80} lo={60} icon={"something"}  />)
	})

	it('Renders DayCast component properly', () => {
		expect(wrapper.length).toEqual(1)
	});

	it('Adds Day passed in value to this.props.day', () => {
		expect(wrapper.find(".five-day").text()).toEqual("Friday")
	})

	it('Adds Date passed in value to this.props.hi', () => {
		let temp = "hi: 80°"
		expect(wrapper.find(".five-hi").text()).toEqual(temp)
	})

	it('Adds Date passed in value to this.props.lo', () => {
		let temp = "lo: 60°"
		expect(wrapper.find(".five-lo").text()).toEqual(temp)
	})

	it('Snapshot of DayCast', () => {
        const renderedValue =  renderer.create(<DayCast />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
