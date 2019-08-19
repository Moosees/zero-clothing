import styled from 'styled-components';

export const CollectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 90vw;
`;

export const TitleContainer = styled.h2`
  font-size: 38px;
  margin: 0 auto 10px;
  text-transform: uppercase;
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-gap: 0.5vw;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  & > div {
    margin-bottom: 30px;
  }
`;
