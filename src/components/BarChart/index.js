import React, {Component} from 'react';
import {drawChart} from "../../d3/BarChart";

class BarChart extends Component {
  data = {
    dataset: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
  };

  componentDidMount() {
    drawChart(this.data);
  }

  render() {
    return <div id={"barChart"}/>
  }
}

export default BarChart;
