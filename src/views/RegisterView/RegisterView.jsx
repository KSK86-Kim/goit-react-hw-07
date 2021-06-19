import React from "react";
import { connect } from "react-redux";
import authOps from "../../redux/auth/auth-operations";

class RegisterView extends React.Component {
  state = {
    name: "",
    email: "",
    password: "",
  };

  onInputChange = (event) => {
    const input = event.target;
    this.setState({ [input.dataset.role]: input.value });
  };

  onRegisterSubmit = (event) => {
    event.preventDefault();
    this.props.registerSubmit(this.state);
    event.target.reset();
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form className="inputForm" onSubmit={this.onRegisterSubmit}>
          <label className="inputLabel">
            Name
            <input
              className="inputField"
              data-role="name"
              type="text"
              onChange={this.onInputChange}
              required
            />
          </label>
          <label className="inputLabel">
            E-mail
            <input
              className="inputField"
              data-role="email"
              type="text"
              onChange={this.onInputChange}
              required
            />
          </label>
          <label className="inputLabel">
            Password
            <input
              className="inputField"
              data-role="password"
              type="text"
              onChange={this.onInputChange}
              required
            />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerSubmit: (credentials) => {
    dispatch(authOps.register(credentials));
  },
});

export default connect(null, mapDispatchToProps)(RegisterView);
