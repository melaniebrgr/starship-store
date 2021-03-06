import TYPES from '../actions/actionTypes';

const INIT_STATE = {
  searchResults: {},
  cart: []
}

export default function storeReducer(state = INIT_STATE, { type, payload }) {
  switch (type) {
    case TYPES.loadItemsSuccess:
      return Object.assign({}, state, { searchResults: payload.data });
    case TYPES.addItemToCart:
      return Object.assign({}, state, { cart: [...state.cart, payload.item] });
    case TYPES.removeItemFromCart:
      return Object.assign({}, state, { cart: state.cart.filter( item => item.name !== payload.item.name ) });
    default:
      return state;
  }
}