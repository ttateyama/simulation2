import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from './components/home'
import Login from './components/login'

export default (
  <Switch>
    <Route component={ Home } exact path="/"/>
    <Route component={ Login } path="/login"/>
  </Switch>
)
