import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useField }  from '@unform/core';

import { FormInput } from './styles';

function InputImage ({ name, label, placeholder, ...rest }) {
    const { fieldName, registerField, defaultValue, error } = useField(name);
    const [preview, setPreview] = useState(defaultValue);
    const inputRef = useRef(null);

    const handlePreview = useCallback((event) => {
        const img = event.target.files?.[0];

        if (!img) {
            setPreview(null);
        }

        const previewURL = URL.createObjectURL(img);

        setPreview(previewURL);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'files[0]',
            clearValue(ref) {
                console.log(ref)
                // setPreview(null);
            },
            setValue(value) {
                setPreview(value);
            }
        })
    }, [fieldName, registerField]);

    return (
        <>
            {preview && <img src={preview} alt="Preview" width="100" />}
            <FormInput 
                ref={inputRef}
                id={fieldName}
                onChange={handlePreview}
                placeholder={placeholder}
                {...rest}
            />
        </>
    )
}

export default InputImage;