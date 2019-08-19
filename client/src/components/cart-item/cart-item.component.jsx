import React, { memo } from 'react';
import {
  ItemContainer,
  ImageContainer,
  DetailsContainer
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, name, price, quantity } }) => (
  <ItemContainer>
    <ImageContainer src={imageUrl} alt={name} />
    <DetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </DetailsContainer>
  </ItemContainer>
);

export default memo(CartItem);
