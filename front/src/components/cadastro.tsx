import { useState } from "react";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <>
      <div>
        <h1>Cadastro</h1>
        <div>
          <label>Nome:</label>
          <input
            type="name"
            onChange={({ ...e }) => {
              setNome(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Sobrenome:</label>
          <input
            type="name"
            onChange={({ ...e }) => {
              setSobrenome(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            onChange={({ ...e }) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>senha:</label>
          <input
            type="password"
            onChange={({ ...e }) => {
              setSenha(e.target.value);
            }}
          ></input>
        </div>
        <button>Cadastrar</button>
      </div>
    </>
  );
}
