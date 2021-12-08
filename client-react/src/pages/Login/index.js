import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';

import api from '../../services/api';

import logoImage from '../../assets/login.png';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function login(event) {
    event.preventDefault();

    console.log()

    const data = {
      email,
      password
    };

    console.log(data)

    try {
      const response = await api.post('api/account/loginuser', data)
      console.log(response.data)
      console.log(response)
      localStorage.setItem('email', email);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('expiration', response.data.expiration);

      history.push('/alunos');

    } catch (error) {
      alert('O login falhou' + error);
    }
  };

  return (
    <div className="login-container">
      <section className="form" >

        <img src={ logoImage } alt="login" id="img1" />
        <form onSubmit={ login }>
          <h1>Cadastro de Alunos</h1>

          <input type="email" placeholder="Email"
            value={ email }
            onChange={ e => setEmail(e.target.value) }
          />

          <input type="password" placeholder="Senha"
            value={ password }
            onChange={ e => setPassword(e.target.value) }
          />

          <button className="button" type="submit" >Entrar</button>
        </form>
      </section>
    </div>
  );
}