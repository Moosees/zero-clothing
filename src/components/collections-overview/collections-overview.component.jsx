import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.compoent';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
  const collectionsList = collections.map(collection => (
    <CollectionPreview key={collection.id} {...collection} />
  ));
  return <div className="collections-overview">{collectionsList}</div>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);
