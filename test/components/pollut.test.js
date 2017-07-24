import React from 'react'
import renderer from 'react-test-renderer';
import Pollut from '../../src/components/pollut';

describe('<Pollut />' , () => {


	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<Pollut co={"200"} />)
	})

	it('Renders Pollut component properly', () => {
		expect(wrapper.length).toEqual(1)
	});

	it('Adds Pollut passed in value to this.props.day', () => {
		expect(wrapper.find('p').text()).toEqual("200ppm")
	})

	it('Snapshot of Pollut', () => {
        const renderedValue =  renderer.create(<Pollut />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
