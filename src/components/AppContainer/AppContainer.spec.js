import React from 'react';
import {mount} from 'enzyme';
import {AppContainer} from '.';

describe('<AppContainer/>', () => {
  it('should render without crashing', () => {
    expect(() => mount(<AppContainer/>)).not.toThrow();
  });

  it('should render header and footer when authenticated', () => {
    localStorage.setItem("auth", JSON.stringify(true));

    const wrapper = mount(<AppContainer/>);

    const text = wrapper.text();

    expect(text).toContain('Header');
    expect(text).toContain('Footer');
  });
});

