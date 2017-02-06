import { ACTION_TYPES } from '../actions/storeActions';

export default function storeReducer(state = [], { type, payload }) {
  switch (type) {
    case ACTION_TYPES.createStoreItem:
      return [
        ...state,
        {...payload.item}
      ];
    default:
      return state;
  }
}