import React, {Component} from 'react';
import LoginForm from "../../components/LoginForm";

class LoginPage extends Component {
  render() {
    const {history} = this.props;

    return <div>
      <h2>Login</h2>
      <LoginForm history={history}/>
    </div>
  }
}

export default LoginPage;
