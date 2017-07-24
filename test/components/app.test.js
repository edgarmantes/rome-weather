import React from 'react'
import App from '../../src/components/app';
import renderer from 'react-test-renderer';
import Tabs from '../../src/components/tabs';

describe('<App />' , () => {


	let wrapper

	beforeEach( ()=>{
		wrapper = shallow(<App  />)
	})

	it('Renders App component properly', () => {
		expect(wrapper.length).toEqual(1)
	});

	it('Snapshot of App', () => {
        const renderedValue =  renderer.create(<App />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });
});

