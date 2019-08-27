import React, {Component} from 'react';
import Auth from "../../utils/Auth";

class Login extends Component {

  render() {
    const {history} = this.props;

    return <div>
      <h2>Login</h2>
      <button onClick={() => Auth.login(() => history.push('/'))}>
        Login
      </button>
    </div>
  }
}

export default Login;
