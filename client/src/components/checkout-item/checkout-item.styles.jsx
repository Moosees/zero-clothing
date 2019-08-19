import styled from 'styled-components';

export const ItemContainer = styled.div`
  align-items: center;
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  font-size: 20px;
  min-height: 100px;
  padding: 15px 0;
  width: 100%;
`;

export const ImageContainer = styled.div`
  padding-right: 15px;
  width: 23%;

  img {
    height: 100%;
    width: 100%;
  }
`;

export const TextContainer = styled.span`
  width: 23%;
`;

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  div {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

export const ButtonContainer = styled.div`
  cursor: pointer;
  padding-left: 12px;
`;
