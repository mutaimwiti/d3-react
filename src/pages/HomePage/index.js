import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class HomePage extends Component {
  render() {
    return (
      <>
        <h2>D3 Charts</h2>
        <Link to={'/charts#bar'}>Bar chart</Link><br/>
        <Link to={'/charts#pie'}>Pie chart</Link>
      </>
    );
  }
}

export default HomePage;
