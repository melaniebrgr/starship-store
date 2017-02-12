import TYPES from '../actions/actionTypes';

export default function storeReducer(state = {}, { type, payload }) {
  switch (type) {
    case TYPES.loadItemsSuccess:
      return { ...payload.data };
    default:
      return state;
  }
}