import React, {Component} from 'react';
import {withRouter} from "react-router";
import Auth from "../../utils/Auth";

export class AppContainer extends Component {
  render() {
    const {children, history} = this.props;

    if (Auth.isAuthenticated()) {
      return (
        <>
          <h1>Header</h1>
          <button onClick={() => Auth.logout(() => history.push('/login'))}>
            Logout
          </button>
          {children}
          <h1>Footer</h1>
        </>
      )
    } else {
      return <>{children}</>;
    }
  }
}

export default withRouter(AppContainer);
