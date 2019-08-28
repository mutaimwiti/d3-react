import React from 'react';
import {shallow, mount} from "../../utils/enzyme";
import ChartsPage from ".";

describe('<ChartsPage/>', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ChartsPage/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<ChartsPage/>)).not.toThrow();
  });
});
