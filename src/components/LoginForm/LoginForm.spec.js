import React from 'react';
import {shallow, mount} from "../../utils/enzyme";
import LoginForm from ".";

describe('<LoginForm/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<LoginForm/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<LoginForm/>)).not.toThrow();
  });
});
