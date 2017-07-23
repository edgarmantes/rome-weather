import React from 'react'
import renderer from 'react-test-renderer';

import PropTypes from 'prop-types';
import CurrentContainer, { Current } from '../../src/components/current';

describe('<Current />' , () => {

	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<Current unit={"C"} dispatch={jest.fn()}  />)
	})

	it('Renders Current component properly', () => {
		expect(wrapper.length).toEqual(1)
	});

	it('Current has a list of options', () => {
		expect(wrapper.find('option').length).toEqual(3);
    // expect(wrapper.find('select [selected]').val()).to.equal('key');
	})

	it('Current select onChange has C', () => {
		wrapper.find('select').simulate('change', {target: { value : "C"}});
		expect(wrapper.find('select').props().value).toBe("C")
	})

	it('Snapshot of DayCast', () => {
        const renderedValue =  renderer.create(<Current unit={"C"} dispatch={jest.fn()} />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
