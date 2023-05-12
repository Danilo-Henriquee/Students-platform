import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.auth.user.id);
  const userName = useSelector((state) => state.auth.user.nome);
  const userEmail = useSelector((state) => state.auth.user.email);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!userId) return;

    setNome(userName);
    setEmail(userEmail);
  }, [userId, userName, userEmail]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      toast.error('Nome deve ter entre 3 e 255 caracteres.');
    }

    if (!isEmail(email) && !email) {
      formErrors = true;
      toast.error('E-mail inválido.');
    }

    if (!userId && (password.length < 6 || password.length > 50)) {
      formErrors = true;
      toast.error('Senha deve ter entre 6 e 50 caracteres.');
    }

    if (formErrors) return;

    dispatch(actions.registerRequest({ nome, email, password, userId }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Form onSubmit={handleSubmit}>
        <h1>{userId ? 'Editar dados' : 'Crie sua conta'}</h1>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </label>

        <label htmlFor="email">
          e-mail:
          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          Senha:
          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button type="submit">{userId ? 'Editar dados' : 'Criar conta'}</button>
      </Form>
    </Container>
  );
}
