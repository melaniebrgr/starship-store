import TYPES from './actionTypes';

export function createStoreItem(item) {
  return {
    type: TYPES.createStoreItem,
    payload: {
      item
    }    
  } 
}