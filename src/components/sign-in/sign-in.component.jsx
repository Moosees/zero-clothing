import React, { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
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
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <div className="button-container">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton isGoogleSignIn onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
