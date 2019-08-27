import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import Auth from '../utils/Auth';

const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route
    {...rest}
    render={props => {
      return Auth.isAuthenticated() ?
        <Component {...rest}/>
        :
        <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
    }}/>
};

export default ProtectedRoute;
