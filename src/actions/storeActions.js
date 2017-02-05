export const ACTION_TYPES = {
  createStoreItem: 'CREATE_STORE_ITEM'
};

export function createStoreItem(item) {
  return {
    type: ACTION_TYPES.createStoreItem,
    payload: {
      item
    }    
  } 
}