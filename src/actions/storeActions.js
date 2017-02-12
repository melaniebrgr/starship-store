import TYPES from './actionTypes';
import makeSWAPIurl from '../constants/api-urls';

function loadItemsSuccess(items) {
  return {
    type: TYPES.loadItemsSuccess,
    payload: {
      items
    }    
  } 
}

export function loadItems(attr, query) {
  return function(dispatch) {
    return fetch(makeSWAPIurl(attr, query))
      .then(response => response.json())
      .then(data => dispatch(loadItemsSuccess(data.results)))
      .catch(error => {
        throw(error)
      });
  }
}