import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import {
  PreviewContainer,
  TitleContainer,
  ListContainer
} from './collection-preview.styles';

const CollectionPreview = ({ title, items }) => {
  const itemList = items
    .filter((_item, i) => i < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);
  return (
    <PreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <ListContainer>{itemList}</ListContainer>
    </PreviewContainer>
  );
};

export default CollectionPreview;
