import React from 'react';
import {shallow, mount} from "../../utils/enzyme";
import Login from ".";

describe('<Login/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Login/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<Login/>)).not.toThrow();
  });
});
