import { useState } from "react";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function Entrar() {
    const resposta = await axios.post("http://localhost:1002/Login", {
      email: email,
    });
    const data = await resposta.data;
    if( senha != data.senha ) {
      alert("senha errada")
    }
    const fullName = `${data.nome}${data.lastName}`
    sessionStorage.setItem('nome', fullName)
    /**
     * -> inical /home 
     * -> autenticação -> /home 
     */
  }

  return (
    <>
      <div>
        <h1>Login</h1>
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
        <button onClick={Entrar}>Login</button>
      </div>
    </>
  );
}
