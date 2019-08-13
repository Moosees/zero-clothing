import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import Header from './components/header/header.component';
import Checkout from './pages/checkout/checkout.component';
import Homepage from './pages/homepage/homepage.component';
import Shop from './pages/shop/shop.component';
import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
