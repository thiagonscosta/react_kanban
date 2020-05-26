import React, { useRef } from 'react';
import Input from '../../inputs/input';
import * as Yup from 'yup';
import { Form } from '@unform/web';

import {
  SubmitButton
} from '../styles';

function FormLogin () {
    
    const formLoginRef = useRef(null);

    async function handleSubmit(data, { reset }) {
        console.log(formLoginRef.current);

        try {
            formLoginRef.current.setErrors({});

            const schema = Yup.object().shape({
              email: Yup.string().email().required(),
              password: Yup.string().min(6).required()
            });

            await schema.validate(data, {
              abortEarly: false
            });

        } catch (err) {

        }
        
        reset();
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