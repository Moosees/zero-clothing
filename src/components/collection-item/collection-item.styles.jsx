import styled from 'styled-components';

export const ItemContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 350px;
  position: relative;
  width: 22vw;

  button {
    display: none;
    opacity: 0.85;
    position: absolute;
    top: 255px;
    width: 80%;
  }

  &:hover {
    .collection-image {
      filter: contrast(110%);
    }

    button {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  filter: contrast(90%);
  height: 95%;
  margin-bottom: 5px;
  transition: filter 0.2s ease;
  width: 100%;
`;

export const FooterContainer = styled.div`
  display: flex;
  font-size: 18px;
  height: 5%;
  justify-content: space-between;
  width: 100%;
`;

export const NameContainer = styled.span`
  margin-bottom: 15px;
  width: 90%;
`;

export const PriceContainer = styled.span`
  text-align: right;
  width: 10%;
`;
