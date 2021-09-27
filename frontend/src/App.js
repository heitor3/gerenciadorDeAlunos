import React, { useState, useEffect } from 'react';
import { Modal, modalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from './assets/cadastro.png';

import './App.css';

function App() {

  const baseUrl = "https://localhost:44330/api/Alunos";

  const [data, setData] = useState([]);

  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  };

  useEffect(() => {
    pedidoGet();
  });

  return (
    <div className="App">
      <br />
      <h3>Cadastro de alunos</h3>
      <header>
        <img src={ logoCadastro } alt="cadastro" />
        <button className="btn btn-success">Incluir Novo Aluno</button>
      </header>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>
          { data.map(aluno => (
            <tr key={ aluno.id }>
              <td>{ aluno.id }</td>
              <td>{ aluno.name }</td>
              <td>{ aluno.email }</td>
              <td>{ aluno.idade }</td>
              <td>
                <button className="btn btn-primary">Editar</button> { "  " }
                <button className="btn btn-danger">Excluir</button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  );
}

export default App;
