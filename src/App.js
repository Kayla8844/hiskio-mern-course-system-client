import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Profile from "./components/Profile";

import AuthService from "./services/auth";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());

  return (
    <div>
      <Nav currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route path="/profile" exact>
          <Profile currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
