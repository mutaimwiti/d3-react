import React from 'react';
import {shallow, mount} from 'enzyme';
import BarChart from "./index";

describe('<BarChart/>', () => {
  beforeEach(() => {
    const wrapper = shallow(<BarChart/>);
  });

  it('should render without crashing', () => {
    expect(() => mount(<BarChart/>)).not.toThrow();
  });
});
