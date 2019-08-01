import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../../components/collection-preview/collection-preview.compoent';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { OverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  const collectionsList = collections.map(collection => (
    <CollectionPreview key={collection.id} {...collection} />
  ));
  return <OverviewContainer>{collectionsList}</OverviewContainer>;
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
