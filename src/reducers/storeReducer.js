import TYPES from '../actions/actionTypes';

export default function storeReducer(state = [], { type, payload }) {
  switch (type) {
    case TYPES.createStoreItem:
      return [
        ...state,
        {...payload.item}
      ];
    case TYPES.loadItemsSuccess:
      return payload.items;
    default:
      return state;
  }
}