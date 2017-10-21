import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from './components/home'
import DashboardNav from './components/dashboardNav'
import WizardNav from './components/wizardNav'
import Dashboard from './components/dashboard'
import Wizard1 from './components/wizard/wizard1'
import Wizard2 from './components/wizard/wizard2'
import Wizard3 from './components/wizard/wizard3'
import Wizard4 from './components/wizard/wizard4'
import Wizard5 from './components/wizard/wizard5'

export default (
  <Switch>
    <Route component={ Home } exact path="/"/>
    <Route component={ DashboardNav } path="/dashboard"/>
    <Route path="/wizard" render={() => (
      <WizardNav>
        <Route path="/wizard/1" component={Wizard1} />
        <Route path="/wizard/2" component={Wizard2} />
        <Route path="/wizard/3" component={Wizard3} />
        <Route path="/wizard/4" component={Wizard4} />
        <Route path="/wizard/5" component={Wizard5} />
      </WizardNav>
    )} />
  </Switch>
)
