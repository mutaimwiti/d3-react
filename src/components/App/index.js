import React, {Component} from 'react';
import {BrowserRouter, Switch} from "react-router-dom";
import AppContainer from "../AppContainer";
import {routes, ProtectedRoute} from '../../router';

class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <AppContainer>
            <Switch>
              {
                routes.map(({protected: isProtected, exact, path, component}) => {
                  return <ProtectedRoute
                    exact={exact}
                    path={path}
                    component={component}
                    key={path}
                  />;
                })
              }
            </Switch>
          </AppContainer>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
