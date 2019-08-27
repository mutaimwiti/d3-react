import React from 'react';
import {mount} from 'enzyme';
import App from '.';

it('should render without crashing', () => {
  expect(() => mount(<App/>)).not.toThrow();
});
