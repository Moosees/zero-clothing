import styled, { css } from 'styled-components';

const defaultButtonStyles = css`
  background-color: #000;
  color: #fff;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
  }
`;

const invertedButtonStyles = css`
  background-color: #fff;
  border: 1px solid #000;
  color: #000;

  &:hover {
    background-color: #000;
    border: 0;
    color: #fff;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #1a5dc9;
    border: 0;
  }
`;

const getButtonStyles = ({ isGoogleSignIn, inverted }) => {
  if (isGoogleSignIn) {
    return googleSignInStyles;
  }

  if (inverted) {
    return invertedButtonStyles;
  }

  return defaultButtonStyles;
};

export const CustomButtonContainer = styled.button`
  border: 0;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  height: 50px;
  justify-content: center;
  letter-spacing: 0.5px;
  line-height: 50px;
  min-width: 165px;
  padding: 0 35px;
  text-transform: uppercase;
  width: auto;

  ${getButtonStyles}
`;
