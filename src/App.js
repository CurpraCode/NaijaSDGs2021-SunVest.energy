import React from "react";
import Sunvest from "./components/Sunvest";
import Marketplace from "./components/Marketplace";
import Login from "./components/Login";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import Reset from "./components/Reset";
import How from "./components/How";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import {AuthContextProvider} from "./context/Context"

function App() {
  return (
   
    <Router>
       <AuthContextProvider>
       <Switch>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/">
          <Sunvest />
         </Route> 
                <Route exact path="/market">
          <Marketplace />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/reset">
          <Reset />
        </Route>
        <Route exact path="/signup">
        <SignUp/>
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/how">
          <How />
        </Route>
      </Switch>
       </AuthContextProvider>
    </Router>
    
  );
}

export default App;
