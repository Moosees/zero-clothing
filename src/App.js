import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/header.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={Shop} />
      <Route path="/signin" component={SignInSignUp} />
    </Switch>
  </>
);

export default App;
