import React from 'react';
import { ErrorSpan } from './styles';

function InputErrorMessage({ message }) {
    return (
        <ErrorSpan>{message}</ErrorSpan>
    )
}

export default InputErrorMessage;