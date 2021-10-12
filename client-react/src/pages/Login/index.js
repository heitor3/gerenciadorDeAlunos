import React from 'react';
import './styles.css';

import logoImage from '../../assets/login.png';

export default function Login() {
  return (
    <div className="login-container">
      <section className="form" >

        <img src={ logoImage } alt="login" id="img1" />
        <form>
          <h1>Cadastro de Alunos</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Senha" />
          <button className="button" type="submit" >Entrar</button>
        </form>
      </section>
    </div>
  );
}