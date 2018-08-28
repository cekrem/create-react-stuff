import React from 'react';
import { shallow } from 'enzyme';
import REPLACE from '.';

describe('REPLACE COMPONENT', () => {
    it('renders as expected', () => {
        const wrap = shallow(<REPLACE />);
        expect(wrap).toMatchSnapshot();
    });
});
