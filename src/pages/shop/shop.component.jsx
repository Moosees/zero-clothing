import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.compoent';
import { selectCollections } from '../../redux/shop/shop.selectors';

const Shop = ({ collections }) => {
  const collectionsList = collections.map(collection => (
    <CollectionPreview key={collection.id} {...collection} />
  ));
  return <div>{collectionsList}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(Shop);
