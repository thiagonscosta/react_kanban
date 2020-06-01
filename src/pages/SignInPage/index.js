import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../contexts/auth.context';

import FormLogin from '../../components/forms/formLogin';
import { Container, FormContainer } from '../styles';
import { Link, useHistory } from 'react-router-dom';

function SignInPage () {
  const history = useHistory();

  const { loggedIn, user } = useContext(AuthContext);

  console.log('login', user);

  return (
    <Container>
      <FormContainer>
        <h3>Login</h3>
        <FormLogin />
        <div>
          <Link to="#">
            Forgot password?
          </Link>
          <Link to="/signup">
            Don't have an account? Sign Up
          </Link>
        </div>
      </FormContainer>
    </Container>
  );
}

export default SignInPage;