import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import "./App.css";

import Login from "./pages/login/login.component";
import Nav from "./components/nav/nav.component.jsx";
import Home from "./pages/home/home.component";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Nav}></Route>
      <Route path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
    </BrowserRouter>
  );
}

export default App;
