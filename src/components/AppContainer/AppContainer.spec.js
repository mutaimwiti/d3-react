import React from 'react';
import {mount, shallow} from '../../utils/enzyme';
import {AppContainer} from '.';

describe('<AppContainer/>', () => {
  beforeEach(() => {
    const wrapper = mount(<AppContainer/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<AppContainer/>)).not.toThrow();
  });

  it('should render header and footer when authenticated', () => {
    localStorage.setItem("auth", JSON.stringify(true));

    const wrapper = shallow(<AppContainer/>);

    const text = wrapper.text();

    expect(text).toContain('Header');
    expect(text).toContain('Footer');
  });
});

