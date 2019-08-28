import React from 'react';
import {shallow, mount} from "../../utils/enzyme";
import LoginPage from ".";

describe('<LoginPage/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoginPage/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<LoginPage/>)).not.toThrow();
  });
});
