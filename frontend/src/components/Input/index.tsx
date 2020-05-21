import React, { useRef, useEffect } from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from '@unform/core';

const Input: React.FC<TextFieldProps> = ({ name = '', ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      name={name}
      error={!!error}
      inputRef={inputRef}
      defaultValue={defaultValue}
      {...rest}
    />
  );
}

export default Input;
