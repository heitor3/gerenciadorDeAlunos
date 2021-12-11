import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import logoCadastro from '../../assets/cadastro.png';
import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi';

import api from "../../services/api";

import './styles.css';

export default function Alunos() {

  const [nome, setNome] = useState('');
  const [alunos, setAlunos] = useState([]);

  const email = localStorage.getItem('email');
  const token = localStorage.getItem('token');

  const history = useHistory();

  const authorization = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  useEffect(() => {
    api.get('api/alunos', authorization).then(
      response => {
        setAlunos(response.data)
      }, token)
  });

  async function logout() {
    try {
      localStorage.clear();
      localStorage.setItem('token', '')
      authorization.headers = '';
      history.push('/')
    } catch (err) {
      alert('Não foi possível fazer o logout' + err)
    }
  }

  async function editAluno(id) {
    try {
      history.push(`/aluno/novo/${id}`);
    } catch (error) {
      alert('Não foi possível editar o aluno ' + error);
    }
  }

  return (
    <div className="aluno-container">
      <header>
        <img src={ logoCadastro } alt="Cadastro logo" />
        <span>Bem-Vindo, <strong>{ email }</strong>!</span>
        <Link className="button" to="aluno/novo/0">Novo Aluno</Link>
        <button type="button" onClick={ logout }>
          <FiXCircle size={ 35 } color="#17202a" />
        </button>
      </header>
      <form>
        <input type="text" placeholder="Nome" />
        <button type="button" className="button">
          Filtrar aluno por nome (parcial)
        </button>
      </form>
      <h1>Relação de Alunos</h1>
      <ul>
        { alunos.map(aluno => (
          <li>
            <b>Nome: </b>{ aluno.nome }<br /><br />
            <b>Email: </b>{ aluno.email }<br /><br />
            <b>Idade: </b>{ aluno.idade }<br /><br />

            <button type="button" onClick={ () => editAluno(aluno.id) }>
              <FiEdit size={ 25 } color="#17202a" />
            </button>

            <button type="button">
              <FiUserX size={ 25 } color="#17202a" />
            </button>
          </li>
        )) }

      </ul>
    </div>
  );
}