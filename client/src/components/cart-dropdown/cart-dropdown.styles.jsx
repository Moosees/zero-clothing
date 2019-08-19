import styled from 'styled-components';

export const DropdownContainer = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 340px;
  padding: 20px;
  position: absolute;
  right: 40px;
  top: 90px;
  width: 240px;
  z-index: 5;

  button {
    margin-top: auto;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;
  overflow: scroll;
`;

export const MessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;
