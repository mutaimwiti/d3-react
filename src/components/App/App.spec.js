import React from 'react';
import {mount, shallow} from '../../utils/enzyme';
import App from '.';

describe('<App/>', () => {
  beforeEach(() => {
    const wrapper = mount(<App/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<App/>)).not.toThrow();
  });
});
