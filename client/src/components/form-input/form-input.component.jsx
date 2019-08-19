import React, { memo } from 'react';
import {
  GroupContainer,
  InputContainer,
  LabelContainer
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <InputContainer onChange={handleChange} {...otherProps} />
    {label ? (
      <LabelContainer length={otherProps.value.length}>{label}</LabelContainer>
    ) : null}
  </GroupContainer>
);

export default memo(FormInput);
