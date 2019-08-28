import React, {Component} from 'react';
import Auth from "../../utils/Auth";

class Login extends Component {
  handleClick = () => {
    const {history} = this.props;
    Auth.login(() => history.push('/'));
  };

  render() {
    return <div>
      <h2>Login</h2>
      <button onClick={() => this.handleClick}>
        Login
      </button>
    </div>
  }
}

export default Login;
