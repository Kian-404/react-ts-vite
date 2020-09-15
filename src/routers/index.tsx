import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../views/Home'
import About from '../views/About'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/about" component={About}></Route>
    </Switch>
  )
}

export default Routes