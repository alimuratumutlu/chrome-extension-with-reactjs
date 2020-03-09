import React from "react";

// Style files to import
import "./app.scss";
import "gestalt/dist/gestalt.css";

// Node Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages Import
import Home from "./content/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
