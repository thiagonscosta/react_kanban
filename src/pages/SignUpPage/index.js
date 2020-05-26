import React from 'react';
import FormRegister from '../../components/forms/formRegister';
import { Container, FormContainer } from '../styles';

function SignUpPage () {
    return (
        <Container>
            <FormContainer>
                <h3>Sign Up</h3>
                <FormRegister />
            </FormContainer>
        </Container>
    )
}

export default SignUpPage;