import React, { Component } from 'react';
import './sign-in.styles.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            required
          />
          <label htmlFor="password">Password</label>
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default SignIn;
