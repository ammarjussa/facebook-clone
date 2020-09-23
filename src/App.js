import React from "react";
import "./App.css";

import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

import { BrowserRouter, Route, Switch } from "react-router-dom";

//BEM Naming Convention

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
