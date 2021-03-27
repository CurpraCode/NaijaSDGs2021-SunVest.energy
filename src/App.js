import React from "react";
import Sunvest from "./components/Sunvest";
import Marketplace from "./components/Marketplace";
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
      </Switch>
    </Router>
  );
}

export default App;
