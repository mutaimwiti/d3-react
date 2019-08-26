import React, {Component} from 'react';
import {drawChart} from "../../d3/BarChart";

class BarChart extends Component {
  componentDidMount() {
    drawChart(this.props);
  }

  render() {
    return <div id={"barChart"}/>
  }
}

export default BarChart;
