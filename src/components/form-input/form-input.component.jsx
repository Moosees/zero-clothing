import React, { memo } from 'react';
import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={
          otherProps.value.length
            ? 'form-input-label shrink'
            : 'form-input-label'
        }
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default memo(FormInput);
