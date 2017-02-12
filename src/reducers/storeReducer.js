import TYPES from '../actions/actionTypes';

export default function storeReducer(state = [], { type, payload }) {
  switch (type) {
    case TYPES.loadItemsSuccess:
      return payload.items.length ? [...payload.items] : [{name: 'No results.'}];
    default:
      return state;
  }
}