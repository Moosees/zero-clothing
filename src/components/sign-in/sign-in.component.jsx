import React, { Component } from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {
  ButtonContainer,
  SignInContainer,
  TitleContainer
} from './sign-in.styles';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
        <TitleContainer>I already have an account</TitleContainer>
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
          <ButtonContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              Sign in with Google
            </CustomButton>
          </ButtonContainer>
        </form>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart())
});

export default connect(
  null,
  mapDispatchToProps
)(SignIn);
