import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  margin: 0 auto 25px;
  width: 90vw;
`;

export const LogoContainer = styled(Link)`
  height: 49px;
  padding: 5px;
  position: relative;
  top: 8px;
  width: 60px;
`;

export const OptionsContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
  text-transform: uppercase;
  width: 50%;
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 10px 15px;
`;
