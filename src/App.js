import React from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
