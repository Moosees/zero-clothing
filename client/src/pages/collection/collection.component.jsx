import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import {
  CollectionContainer,
  TitleContainer,
  ItemsContainer
} from './collection.styles';

const Collection = ({ collection, history }) => {
  if (!collection) {
    history.push('/');
    return null;
  } else {
    const { title, items } = collection;
    const itemsList = items.map(item => (
      <CollectionItem key={item.id} item={item} />
    ));
    return (
      <CollectionContainer>
        <TitleContainer>{title}</TitleContainer>
        <ItemsContainer>{itemsList}</ItemsContainer>
      </CollectionContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
