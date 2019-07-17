import React, { Component } from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.compoent';
import { SHOP_DATA } from './shop.data';

class Shop extends Component {
  state = { collections: SHOP_DATA };
  render() {
    const { collections } = this.state;
    const collectionList = collections.map(collection => (
      <CollectionPreview key={collection.id} {...collection} />
    ));
    return <div>{collectionList}</div>;
  }
}

export default Shop;
