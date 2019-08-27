import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <>
        <Link to={'/bar-chart'}>Bar chart</Link><br/>
        <Link to={'/'}>Pie chart</Link>
      </>
    );
  }
}

export default Home;
