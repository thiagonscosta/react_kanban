import React, { useRef, useContext } from 'react';
import Input from '../../inputs/input';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import AuthContext from '../../../contexts/auth.context';

import {
  SubmitButton
} from '../styles';

function FormLogin () {
    const { userLogin } = useContext(AuthContext);

    const formLoginRef = useRef(null);

    async function handleSubmit(data, { reset }) {
      try {
        formLoginRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Enter a valid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(4,'The password must be at least 8 characters long.')
            .required('Password is required'),
        });

        await schema.validate(data, {
          abortEarly: false
        });

        await userLogin(data);

        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};

          err.inner.forEach(error => {
            errorMessages[error.path] = error.message;
          })

          formLoginRef.current.setErrors(errorMessages);
        }
      }
    }

    return (
      <Form ref={formLoginRef} onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          placeholder="e-mail"
        />
        <Input
          name="password"
          type="password"
          placeholder="password"
        />
        <SubmitButton type="submit">Sign In</SubmitButton>
      </Form>
    );
}

export default FormLogin;