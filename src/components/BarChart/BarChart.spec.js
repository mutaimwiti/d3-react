import React from 'react';
import {shallow, mount} from '../../utils/enzyme';
import BarChart from "./index";

describe('<BarChart/>', () => {
  beforeEach(() => {
    const wrapper = mount(<BarChart/>);
  });

  it('should render without crashing', () => {
    expect(() => shallow(<BarChart/>)).not.toThrow();
  });
});
