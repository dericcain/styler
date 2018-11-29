import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  color: #333;
  background-color: #bdc3c7;
  border-color: #bdc3c7;
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: .25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
`;

const Button = props => <StyledButton type="button" {...props} />;

Button.displayName = 'Button';

export default Button;
