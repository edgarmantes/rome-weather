import React from 'react'
import renderer from 'react-test-renderer';
import ForeCast from '../../src/components/forecast';

describe('<ForeCast />' , () => {

	// const store = { 
	//   	subscribe: () => {},
	//   	dispatch: () => {},
	//   	getState: () => {}
	// }
	// const options = {
	// 	context: { store }, 
	//   	childContextTypes: { store: React.PropTypes.object.isRequired } 
	// }

	// const _wrapper = mount(<ForeCast  />, options)


	// let wrapper

	// beforeEach( ()=>{
	// 	wrapper = shallow(<ForeCast />)
	// })

	it('Renders ForeCast component properly', () => {
		console.log("ForeCast - test")
		// expect(wrapper.length).toEqual(1)
	});

	// // it('Adds ForeCast passed in value to this.props.day', () => {
	// // 	expect(wrapper.find(".five-day").text()).toEqual("Friday")
	// // })

	// it('Snapshot of ForeCast', () => {
 //        const renderedValue =  renderer.create(<ForeCast />).toJSON()
 //        expect(renderedValue).toMatchSnapshot();
 //    });
});
