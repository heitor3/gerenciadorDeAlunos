import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import logoCadastro from './assets/cadastro.png';

import './App.css';

function App() {

  const baseUrl = "https://localhost:44330/api/Alunos";

  const [data, setData] = useState([]);

  const [modalIncluir, setModalIncluir] = useState(false);

  const [alunoSelecionado, setAlunoSelecionado] = useState({
    id: '',
    nome: '',
    email: '',
    idade: ''
  });

  const abrirFecharModalIncluir = () => {
    setModalIncluir(!modalIncluir);
  }

  const handleChange = x => {
    const { name, valeu } = x.target;
    setAlunoSelecionado({
      ...alunoSelecionado, [name]: valeu
    });
    console.log(alunoSelecionado);
  }



  const pedidoGet = async () => {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      }).catch(error => {
        console.log(error);
      })
  };

  const pedidoPost = async () => {
    delete alunoSelecionado.id;
    alunoSelecionado.idade = parseInt(alunoSelecionado.idade);
    await axios.post(baseUrl, alunoSelecionado)
      .then(response => {
        setData(data.concat(response.data));
        abrirFecharModalIncluir();
      }).catch(error => {
        console.log("carai");
      });
  };

  useEffect(() => {
    pedidoGet();
  });

  return (
    <div className="aluno-container">
      <br />
      <h3>Cadastro de alunos</h3>
      <header>
        <img src={ logoCadastro } alt="cadastro" />
        <button className="btn btn-success" onClick={ () => abrirFecharModalIncluir() }>
          Incluir Novo Aluno
        </button>
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
              <td>{ aluno.nome }</td>
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
      <Modal isOpen={ modalIncluir }>
        <ModalHeader>Incluir Alunos</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Nome: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="nome"
              onChange={ handleChange }
            />
            <br />
            <label>Email: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={ handleChange }
            />
            <br />
            <label>Idade: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="idade"
              onChange={ handleChange }
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={ () => pedidoPost() }>
            Incluir
          </button>
          { "  " }
          <button
            className="btn btn-danger"
            onClick={ () => abrirFecharModalIncluir() }>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default App;