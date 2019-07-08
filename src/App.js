import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';

const App = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/shop" component={Shop} />
  </Switch>
);

export default App;
