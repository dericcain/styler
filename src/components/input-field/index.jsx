import React from 'react';
import styled from 'styled-components';

import Input from '../input';

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  margin-bottom: .5rem;
`

const InputField = ({ label, name, labelProps, wrapperProps, ...props }) => (
  <FormGroup {...wrapperProps}>
    <Label htmlFor={name} {...labelProps}>{label}</Label>
    <Input name={name} {...props} />
  </FormGroup>
);

InputField.displayName = 'InputField';

InputField.defaultProps = {
  labelProps: {},
  wrapperProps: {},
};

export default InputField;
