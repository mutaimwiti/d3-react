import React, {Component} from 'react';
import BarChart from "../../components/BarChart";

class ChartsPage extends Component {
  render() {
    return (
      <>
        <h2>Charts</h2>
        <div id={'bar'}>
          <BarChart/>
        </div>
      </>
    );
  }
}

export default ChartsPage;
