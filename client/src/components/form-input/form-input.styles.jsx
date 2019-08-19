import styled, { css } from 'styled-components';

const mainColor = '#000';
const subColor = '#808080';

const labelShrinkStyles = css`
  color: ${mainColor};
  font-size: 12px;
  top: -14px;
`;

const getLabelShrinkStyles = ({ length }) => (length ? labelShrinkStyles : '');

export const GroupContainer = styled.div`
  margin: 45px 0;
  position: relative;
`;

export const InputContainer = styled.input`
  background: none;
  background-color: #fff;
  border: 0;
  border-bottom: 1px solid ${subColor};
  border-radius: 0;
  color: ${subColor};
  display: block;
  font-size: 18px;
  margin: 25px 0;
  padding: 10px 10px 10px 5px;
  width: 100%;

  &:focus {
    outline: none;
  }

  &:focus ~ label {
    ${labelShrinkStyles}
  }

  &[type='password'] {
    letter-spacing: 0.3em;
  }
`;

export const LabelContainer = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  left: 5px;
  pointer-events: none;
  position: absolute;
  top: 10px;
  transition: font-size 0.3s ease, top 0.3s ease, color 0.3s ease;

  ${getLabelShrinkStyles}
`;
