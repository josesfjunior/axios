import { useState } from "react";
import axios from 'axios'
export default function Cadastro() {

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Criar(){
    console.log("Oi")
    
    const requisicao = await axios.post("http://localhost:1002/User", {
      nome: nome,
      lastName: sobrenome,
      email: email,
      senha: senha
    } )
    console.log(await typeof requisicao)
    console.log(await requisicao)
  }

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
        <button onClick = { Criar }>Cadastrar</button>
      </div>
    </>
  );
}
