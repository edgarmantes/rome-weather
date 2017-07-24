import React from 'react'
import AlertDay from '../../src/components/alertday';
import renderer from 'react-test-renderer';

describe('<AlertDay />' , () => {

	it('Renders AlertDay component properly', () => {
		shallow(<AlertDay/>)
	});

	it("Renders with correct props.day value", () => {
		const day = "Friday";
		const wrapper = mount(<AlertDay day={day} />);
		expect(wrapper.find(".alert-day").text()).toEqual(day)
	})

	it("Renders with correct props.date value", () => {
		const day = "17";
		const wrapper = mount(<AlertDay date={day} />);
		expect(wrapper.find(".alert-date").text()).toEqual(day)
	})

	it("Renders with correct props.fahr value", () => {
		const fahr = "80";
		const output = "high of: 80";
		const wrapper = mount(<AlertDay fahr={fahr} />);
		expect(wrapper.find(".alert-temp").text()).toEqual(output)
	})

	it("Renders with correct props.date value", () => {
		const unit = "&#8457";
		const output = "high of: &#8457";
		const wrapper = mount(<AlertDay unit={unit} />);
		expect(wrapper.find(".alert-temp").text()).toEqual(output)
	})


	it('Snapshot of AlertDay', () => {
        const renderedValue =  renderer.create(<AlertDay />).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});


