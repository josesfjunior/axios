import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

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
        <button>Login</button>
      </div>
    </>
  );
}
