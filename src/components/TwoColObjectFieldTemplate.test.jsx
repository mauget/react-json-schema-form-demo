import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TwoColObjectFieldTemplate from './TwoColObjectFieldTemplate';

configure({ adapter: new Adapter() });

describe('TwoColObjectFieldTemplate', () => {
    it('should match its snapshot', () => {
        const titleField = jest.fn();
        const properties = [
            { content: { key: 'firstName' } },
            { content: { ket: 'lastName' } },
            { content: { ket: 'age' } },
        ];
        const wrapper = shallow(
            <TwoColObjectFieldTemplate
                TitleField={titleField}
                properties={properties}
                title='title'
                description='description'
            />
        );
        expect(wrapper).toMatchSnapshot();
    });
});
