import React from 'react';
import {shallow, mountWithRouter} from "../../utils/enzyme";
import Home from ".";

describe('<Home/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithRouter(<Home/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<Home/>)).not.toThrow();
  });

  it('should contain all links', () => {
    const links = wrapper.find('a');
    expect(links.length).toBe(2);
  });
});
