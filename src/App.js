import React from "react";
import Sunvest from "./components/Sunvest";
import Marketplace from "./components/Marketplace";
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Sunvest />
        </Route>
        <Route exact path="/market">
          <Marketplace />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
