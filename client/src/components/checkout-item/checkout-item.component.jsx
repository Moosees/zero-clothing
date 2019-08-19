import React from 'react';
import { connect } from 'react-redux';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart
} from '../../redux/cart/cart.actions';
import {
  ItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  ButtonContainer
} from './checkout-item.styles';

const CheckoutItem = ({ item, addItem, clearItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;

  return (
    <ItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(item)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(item)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <ButtonContainer onClick={() => clearItem(item)}>
        &#10005;
      </ButtonContainer>
    </ItemContainer>
  );
};
const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItemToCart(item)),
  clearItem: item => dispatch(clearItemFromCart(item)),
  removeItem: item => dispatch(removeItemFromCart(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
