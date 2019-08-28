import React from 'react';
import {shallow, mountWithRouter} from "../../utils/enzyme";
import HomePage from ".";

describe('<HomePage/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithRouter(<HomePage/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<HomePage/>)).not.toThrow();
  });

  it('should contain all links', () => {
    const links = wrapper.find('a');
    expect(links.length).toBe(2);
  });
});
