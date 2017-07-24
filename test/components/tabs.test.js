import React from 'react'
import renderer from 'react-test-renderer';
import Tabs from '../../src/components/tabs';

describe('<Tabs />' , () => {


	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<Tabs />)
	})

	it('Renders Tabs component properly', () => {
		expect(wrapper.length).toEqual(1)
	});

	// it('Adds Tabs passed in value to this.props.day', () => {
	// 	expect(wrapper.props().children).toEqual("list")
	// })

	it('Snapshot of Tabs', () => {
        const renderedValue =  renderer.create(<Tabs />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});
