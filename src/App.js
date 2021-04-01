import React from "react";
import Sunvest from "./components/Sunvest";
import Marketplace from "./components/Marketplace";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route exact path="/home">
          <Sunvest />
        </Route>
        <Route exact path="/market">
          <Marketplace />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
