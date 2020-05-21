import React, { useCallback, useRef } from 'react';
import { Button, Typography } from '@material-ui/core';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import { Container, Wrapper } from './styles';


const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, { abortEarly: false });

        await signIn({ email: data.email, password: data.password });

      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Wrapper maxWidth="xl">
        <div>
          <h1>Sign In</h1>
          <Typography color="textSecondary" >Sistema para gestão de obras.</Typography>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input
              color="primary"
              variant="outlined"
              margin="normal"
              fullWidth
              name="email"
              label="Email"
              autoComplete="current-email"
            />
            <Input
              variant="outlined"
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              size="large"
            >
              Entrar
            </Button>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
}

export default SignIn;
