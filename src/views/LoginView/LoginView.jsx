import React from 'react';
import { connect } from 'react-redux';
import authOps from '../../redux/auth/auth-operations';
import s from './LoginView.module.css';

class LoginView extends React.Component {
  state = {
    email: '',
    password: '',
  };

  onInputChange = event => {
    const input = event.target;
    this.setState({ [input.dataset.role]: input.value });
  };

  onLoginSubmit = event => {
    event.preventDefault();
    this.props.loginSubmit(this.state);
    event.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        <form className="inputForm" onSubmit={this.onLoginSubmit}>
          <label className="inputLabel">
            E-mail
            <input
              className="inputField"
              type="text"
              required
              onChange={this.onInputChange}
              data-role="email"
            />
          </label>
          <label className="inputLabel">
            Password
            <input
              className="inputField"
              type="text"
              required
              onChange={this.onInputChange}
              data-role="password"
            />
          </label>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginSubmit: credentials => {
    return dispatch(authOps.login(credentials));
  },
});

export default connect(null, mapDispatchToProps)(LoginView);
