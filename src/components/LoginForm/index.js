import React, {Component} from 'react';
import Auth from "../../utils/Auth";

class LoginForm extends Component {
  handleClick = () => {
    const {history} = this.props;
    Auth.login(() => history.push('/'));
  };

  render() {
    return <div>
      <button onClick={() => this.handleClick()}>
        Login
      </button>
    </div>
  }
}

export default LoginForm;
