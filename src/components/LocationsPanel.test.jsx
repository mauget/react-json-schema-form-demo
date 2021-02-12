import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LocationsPanel from './LocationsPanel';

configure({ adapter: new Adapter() });

describe('LocationsPanel', () => {

    it('should match its snapshot', () => {
        const wrapper = shallow(<LocationsPanel />);
        expect(wrapper).toMatchSnapshot();
    });

    it.skip('should call onChage', () => {
        // const onChange = jest.fn()
        const event = { target: { value: 'test' } };
        const wrapper = mount(<LocationsPanel />);
        wrapper.find('TextField').simulate('onChange', event)
    });

});
