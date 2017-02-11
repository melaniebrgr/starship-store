import TYPES from './actionTypes';

export function createStoreItem(item) {
  return {
    type: TYPES.createStoreItem,
    payload: {
      item
    }    
  } 
}

export function loadItemsSuccess(items) {
  return {
    type: TYPES.loadItemsSuccess,
    payload: {
      items
    }    
  } 
}

export function loadItems() {
  return function(dispatch) {
    return fetch('http://swapi.co/api/starships/')
      .then(response => response.json())
      .then(data => dispatch(loadItemsSuccess(data.results)))
      .catch(error => {
        throw(error)
      });
  }
}