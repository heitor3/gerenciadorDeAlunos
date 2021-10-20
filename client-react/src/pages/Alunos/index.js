import React from "react";
import { Link } from "react-router-dom";

import logoCadastro from '../../assets/cadastro.png';
import { FiXCircle, FiEdit, FiUserX } from 'react-icons/fi';

import './styles.css';

export default function Alunos() {
  return (
    <div className="aluno-container">
      <header>
        <img src={ logoCadastro } alt="Cadastro logo" />
        <span>Bem-Vindo, <strong>Heitor</strong>!</span>
        <Link className="button" to="aluno/novo">Novo Aluno</Link>
        <button type="button">
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
        <li>
          <b>Nome: </b>Heitor<br /><br />
          <b>Email: </b>heitor@gmail.com<br /><br />
          <b>Idade: </b>28<br /><br />
          <button type="button">
            <FiEdit size={ 25 } color="#17202a" />
          </button>
          <button type="button">
            <FiUserX size={ 25 } color="#17202a" />
          </button>
        </li>
      </ul>
    </div>
  );
}