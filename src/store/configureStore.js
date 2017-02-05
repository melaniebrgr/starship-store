import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers/index';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      reduxImmutableStateInvariant(),
      reduxThunk
    )
  );
}