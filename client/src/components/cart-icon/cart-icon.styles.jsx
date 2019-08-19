import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 45px;
  justify-content: center;
  position: relative;
  width: 45px;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  height: 24px;
  width: 24px;
`;

export const ItemCountContainer = styled.span`
  bottom: 12px;
  font-size: 10px;
  font-weight: bold;
  position: absolute;
`;
