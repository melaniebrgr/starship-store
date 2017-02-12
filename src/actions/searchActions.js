import TYPES from './actionTypes';
import makeSWAPIurl from '../constants/api-urls';

export function addItemToCart(item) {
  return {
    type: TYPES.addItemToCart,
    payload: {
      item
    }
  }
}

function loadItemsSuccess(data) {
  return {
    type: TYPES.loadItemsSuccess,
    payload: {
      data
    }    
  } 
}

export function loadItems(attr, query) {
  return dispatch => {
    return fetch(makeSWAPIurl(attr, query))
      .then(response => response.json())
      .then(data => dispatch(loadItemsSuccess(data)))
      .catch(error => {
        throw(error)
      });
  }
}