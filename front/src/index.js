import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./components/login";
import Cadastro from "./components/cadastro";
import Dash from "./components/dash";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/login" exact={true} component={Login} />
        <Route path="/registro" exact={true} component={Cadastro} /> 
        <Route path="/dash" exact={true} component={Dash} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
