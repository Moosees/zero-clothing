import { ShopActionTypes } from './shop.types';
import { collections } from './shop.initial-state';

const INITIAL_STATE = { collections };

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
