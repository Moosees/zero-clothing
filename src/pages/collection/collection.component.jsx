import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collection.styles.scss';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  const itemsList = items.map(item => (
    <CollectionItem key={item.id} item={item} />
  ));
  return (
    <div className="collection">
      <h2 className="title">{title}</h2>
      <div className="items">{itemsList}</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);
