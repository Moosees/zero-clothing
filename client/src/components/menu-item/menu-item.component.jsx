import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  ItemContainer,
  ImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <ItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <ImageContainer className="menu-item-background" imageUrl={imageUrl} />
    <ContentContainer className="menu-item-content">
      <TitleContainer>{title}</TitleContainer>
      <SubtitleContainer>Shop now</SubtitleContainer>
    </ContentContainer>
  </ItemContainer>
);

export default withRouter(MenuItem);
