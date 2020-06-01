import React, { useRef } from 'react';
import Input from '../../inputs/input';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import {
  SubmitButton
} from '../styles';

function FormRegister () {
    
    const formRegisterRef = useRef(null);

    async function handleSubmit(data, { reset }) {
      try {
        formRegisterRef.current.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .email('Enter a valid email address')
            .required('Email is required'),
          password: Yup.string()
            .min(4,'The password must be at least 8 characters long.')
            .required('Password is required'),
          name: Yup.string()
            .required('The name must be at least 8 characters long.')
        });

        await schema.validate(data, {
          abortEarly: false
        });

        reset();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {};

          err.inner.forEach(error => {
            errorMessages[error.path] = error.message;
          })

          formRegisterRef.current.setErrors(errorMessages);
        }
      }
    }

    return (
      <Form ref={formRegisterRef} onSubmit={handleSubmit}>
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
        <Input
          name="name"
          type="text"
          placeholder="name"
        />
        <SubmitButton type="submit">Sign Up</SubmitButton>
      </Form>
    );
}

export default FormRegister;