import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';

const App = () => (
  <Switch>
    <Route exaxt path="/" component={Homepage} />
  </Switch>
);

export default App;
