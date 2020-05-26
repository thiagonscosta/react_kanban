import React, { useEffect, useRef } from 'react';
import { useField }  from '@unform/core';

import { FormInput } from './styles';

function Input ({ name, label, placeholder, ...rest }) {
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const inputRef = useRef(null);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <>
            {label && <label htmlFor={fieldName}>{label}</label>}
            <FormInput 
                ref={inputRef}
                id={fieldName}
                placeholder={placeholder}
                {...rest}
            />
        </>
    )
}

export default Input;