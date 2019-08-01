import styled, { css } from 'styled-components';

const sizeLargeStyles = css`
  height: 380px;
`;

const sizeDefaultStyles = css`
  height: 240px;
`;

const getSizeStyles = ({ size }) => {
  if (size === 'large') {
    return sizeLargeStyles;
  }
  return sizeDefaultStyles;
};

export const ItemContainer = styled.div`
  align-items: center;
  border: 1px solid #000;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  margin: 0 7.5px 15px;
  min-width: 30%;
  overflow: hidden;

  ${getSizeStyles}

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    & .menu-item-background {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & .menu-item-content {
      opacity: 0.9;
    }
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  height: 100%;
  transition: transform 0.2s ease-in-out;
  width: 100%;
`;

export const ContentContainer = styled.div`
  align-items: center;
  background-color: #fff;
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  height: 90px;
  justify-content: center;
  opacity: 0.7;
  padding: 0 25px;
  position: absolute;
  text-transform: uppercase;
  transition: opacity 0.2s ease-in-out;
`;

export const TitleContainer = styled.h1`
  color: #4a4a4a;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const SubtitleContainer = styled.span`
  font-size: 16px;
  font-weight: lighter;
`;
