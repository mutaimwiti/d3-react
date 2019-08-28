import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../utils/Auth';
import routes from "./routes";

class ProtectedRoute extends Component {
  isProtected = (props) => {
    const protectedRoutes = routes.filter(route => route.protected).map(route => route.path);

    return protectedRoutes.indexOf(props.location.pathname) > -1;
  };

  render() {
    const {component: Component, ...rest} = this.props;

    return <Route
      {...rest}
      render={props => {
        if (Auth.isAuthenticated()) {
          if (this.isProtected(props)) {
            return <Component {...props}/>;
          } else {
            return <Redirect to={{pathname: '/', state: {from: props.location}}}/>;
          }
        } else {
          if (this.isProtected(props)) {
            return <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
          } else {
            return <Component {...props}/>;
          }
        }
      }}
    />
  }
}

export default ProtectedRoute;
