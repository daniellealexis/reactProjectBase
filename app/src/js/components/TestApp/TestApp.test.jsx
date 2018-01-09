import React from 'react';
import { shallow } from 'enzyme';

import TestApp from '@components/TestApp';

describe('TestApp', () => {
    it('renders an emoji span', () => {
        const wrapper = shallow(<TestApp />);
        expect(wrapper.find('span').length).toBe(1);
    });
});
