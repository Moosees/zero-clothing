import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => {
  const itemList = items
    .filter((_item, i) => i < 4)
    .map(item => <CollectionItem key={item.id} item={item} />);
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">{itemList}</div>
    </div>
  );
};

export default CollectionPreview;
