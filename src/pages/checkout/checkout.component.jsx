import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartPriceSum
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const Checkout = ({ cartItems, cartSum }) => (
  <div className="checkout">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <div className="total">
      <span>Total: {cartSum}</span>
    </div>
    <StripeButton price={cartSum} />
  </div>
);

const matStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartSum: selectCartPriceSum
});

export default connect(matStateToProps)(Checkout);
