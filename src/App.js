import React, {Component} from 'react';
import BarChart from "./components/BarChart";

class App extends Component {

  state = {
    data: [12, 5, 6, 6, 9, 10],
    width: 700,
    height: 500,
  };

  render() {
    return (
      <div className="App">
        <BarChart data={this.state.data} width={this.state.width} height={this.state.height}/>
      </div>
    );
  }
}

export default App;
