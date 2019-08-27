import React from 'react';
import {shallow, mount} from 'enzyme';
import BarChart from "./index";

describe('<BarChart/>', () => {
  const props = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
  };

  // drawChart.mockResolvedValue(undefined);

  beforeEach(() => {
    const wrapper = shallow(<BarChart {...props}/>);
  });

  it('should render without crashing', () => {
    expect(() => mount(<BarChart {...props}/>)).not.toThrow();
  });
});
