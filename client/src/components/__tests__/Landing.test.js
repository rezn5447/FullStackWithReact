import React from 'react';
import { shallow } from 'enzyme';
import Landing from '../Landing';

const app = shallow(<Landing />);

it('renders correctly', () => {
  expect(app).toMatchSnapshot();
});
