import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import Shop from './pages/shop/shop.component';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
    </Switch>
  </>
);

export default App;
