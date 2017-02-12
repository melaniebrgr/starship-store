import TYPES from './actionTypes';

export function loadItemsSuccess(items) {
  return {
    type: TYPES.loadItemsSuccess,
    payload: {
      items
    }    
  } 
}

export function loadItems(query) {
  return function(dispatch) {
    return fetch(`https://swapi.co/api/starships/?search=${query}`)
      .then(response => response.json())
      .then(data => dispatch(loadItemsSuccess(data.results)))
      .catch(error => {
        throw(error)
      });
  }
}