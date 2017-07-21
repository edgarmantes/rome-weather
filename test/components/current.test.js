import React from 'react'
import renderer from 'react-test-renderer';

import PropTypes from 'prop-types';
import CurrentContainer, { Current } from '../../src/components/current';

describe('<Current />' , () => {


	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<Current unit={"C"} />)
	})

	it('Renders Current component properly', () => {
		
		// expect(wrapper.length).toEqual(1)
	});

	// it('Adds Day passed in value to this.props.day', () => {
	// 	expect(wrapper.find(".five-day").text()).toEqual("Friday")
	// })

	// it('Adds Date passed in value to this.props.hi', () => {
	// 	let temp = "hi: 80°"
	// 	expect(wrapper.find(".five-hi").text()).toEqual(temp)
	// })

	// it('Adds Date passed in value to this.props.lo', () => {
	// 	let temp = "lo: 60°"
	// 	expect(wrapper.find(".five-lo").text()).toEqual(temp)
	// })

	// it('Snapshot of DayCast', () => {
 //        const renderedValue =  renderer.create(<Current />).toJSON()
 //        expect(renderedValue).toMatchSnapshot();
 //    });
});
