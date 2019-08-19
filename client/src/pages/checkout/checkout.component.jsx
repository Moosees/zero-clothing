import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  selectCartItems,
  selectCartPriceSum
} from '../../redux/cart/cart.selectors';
import {
  CheckoutContainer,
  HeaderContainer,
  HeaderBlock,
  TotalContainer,
  WarningContainer
} from './checkout.styles';

const Checkout = ({ cartItems, cartSum }) => (
  <CheckoutContainer>
    <HeaderContainer>
      <HeaderBlock>
        <span>Product</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Description</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Quantity</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Price</span>
      </HeaderBlock>
      <HeaderBlock>
        <span>Remove</span>
      </HeaderBlock>
    </HeaderContainer>
    {cartItems.map(item => (
      <CheckoutItem key={item.id} item={item} />
    ))}
    <TotalContainer>
      <span>Total: ${cartSum}</span>
      <StripeButton price={cartSum} />
    </TotalContainer>
    <WarningContainer>
      Please use the following credit card for testing:
      <br />
      4242 4242 4242 4242 - Exp 01/23 CVV 123
    </WarningContainer>
  </CheckoutContainer>
);

const matStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartSum: selectCartPriceSum
});

export default connect(matStateToProps)(Checkout);
