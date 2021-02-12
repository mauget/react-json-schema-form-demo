import React from 'react';
import { render, screen } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
    it('should rnder a registeration form', () => {
        render(<App />);
        const linkElement = screen.getByText(/registration form/i);
        expect(linkElement).toBeInTheDocument();
    });

    it('should match its snapshot', () => {
        const wrapper = shallow(<App />);
        expect(wrapper).toMatchSnapshot();
    });
});
