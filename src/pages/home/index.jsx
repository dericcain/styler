import React, { Component } from 'react';
import styled from 'styled-components';

import InputField from '../../components/input-field';
import Button from '../../components/button';

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = styled.div`
  width: 400px;
  padding: 24px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`;

const H4 = styled.h4`
  margin-bottom: 1rem;
`;

class Home extends Component {
  state = {};

  render() {
    return (
      <Wrapper className="login--wrapper">
        <Login className="login">
          <H4 className="login--header">Login here!</H4>
          <InputField
            className="login--input__email"
            label="Email"
            type="email"
            name="email"
          />
          <InputField
            className="login--input__password"
            label="Password"
            type="password"
            name="password"
          />
          <Button className="login--button__submit">Login</Button>
        </Login>
      </Wrapper>
    );
  }
}

export default Home;
