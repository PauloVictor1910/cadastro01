import React, { useState } from "react";
import "./styles.css";

function Cadastro() {
  const [nome, setNome] = useState("");
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");

  const [userType, setUserType] = useState("");

  // Limpar os estados de dados
  const handleUserTypeChange = (e) => {
    setUserType(e.target.id);
    // Limpar os estados de dados
    setNome("");
    setLogin("");
    setSenha("");
    setEmail("");
    setTelefone("");
    setCep("");
    setSobrenome("");
    setDataNascimento("");
    setCpf("");
  };

  const renderCommonFields = () => (
    <>
      <div className="input-box">
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          placeholder="aaaaaaa"
          type="text"
          name="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="sobrenome">Login</label>
        <input
          id="login"
          placeholder="aaaaaaa"
          type="text"
          name="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          required
        />
      </div>

      <div className="input-box">
        <label htmlFor="senha">Senha</label>
        <input
          id="senha"
          placeholder="aaaaaaa"
          type="password"
          name="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="aaaaaaa"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          placeholder="aaaaaaa"
          type="text"
          name="telefone"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          required
        />
      </div>
      <div className="input-box">
        <label htmlFor="perfil">Cep</label>
        <input
          id="cep"
          placeholder="aaaaaaa"
          type="text"
          name="cep"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          required
        />
      </div>
    </>
  );

  const renderProfessorFields = () => (
    <>
      <div className="input-box">
        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          placeholder="Digite seu sobrenome"
          id="sobrenome"
          type="text"
          name="sobrenome"
        />
      </div>
      <div className="input-box">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input
          placeholder="Digite sua data de nascimento"
          id="dataNascimento"
          type="date"
          name="dataNascimento"
        />
      </div>
      <div className="input-box">
        <label htmlFor="cpf">CPF</label>
        <input placeholder="Digite seu CPF" id="cpf" type="text" name="cpf" />
      </div>
    </>
  );

  const renderAlunoFields = () => (
    <>
      <div className="input-box">
        <label htmlFor="sobrenome">Sobrenome</label>
        <input
          placeholder="Digite seu sobrenome"
          id="sobrenome"
          type="text"
          name="sobrenome"
        />
      </div>
      <div className="input-box">
        <label htmlFor="dataNascimento">Data de Nascimento</label>
        <input
          placeholder="Digite sua data de nascimento"
          id="dataNascimento"
          type="date"
          name="dataNascimento"
        />
      </div>
      <div className="input-box">
        <label htmlFor="cpf">CPF</label>
        <input placeholder="Digite seu CPF" id="cpf" type="text" name="cpf" />
      </div>
    </>
  );

  const renderInstituicaoFields = () => (
    <div className="input-box">
      <label htmlFor="cnpj">CNPJ</label>
      <input
        placeholder="Digite o CNPJ da instituição"
        id="cnpj"
        type="text"
        name="cnpj"
      />
    </div>
  );

  return (
    <div className="container">
      <div className="form-image"></div>
      <div className="form">
        <form action="#">
          <div className="form-header">
            <div className="title">
              <h1>Cadastre-se</h1>
            </div>
            <div className="login-button">
              <button>
                <a href="#">Entrar</a>
              </button>
            </div>
          </div>

          <div className="input-group">
            <div className="gender-inputs">
              <div className="gender-title">
                <h6>Tipo de Usuário:</h6>
              </div>

              <div className="gender-group">
                <div className="gender-input">
                  <input
                    id="professor"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="professor">Professor</label>
                </div>

                <div className="gender-input">
                  <input
                    id="aluno"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="aluno">Aluno</label>
                </div>

                <div className="gender-input">
                  <input
                    id="instituicao"
                    type="radio"
                    name="gender"
                    onChange={handleUserTypeChange}
                  />
                  <label htmlFor="instituicao">Instituição</label>
                </div>
              </div>
            </div>

            {userType === "professor" && renderProfessorFields()}
            {userType === "aluno" && renderAlunoFields()}
            {userType === "instituicao" && renderInstituicaoFields()}

            {renderCommonFields()}
          </div>

          <div className="continue-button">
            <button>
              <a href="#">Continuar</a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
