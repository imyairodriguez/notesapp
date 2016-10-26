import { createStore } from 'redux';
import rootReducer from '../reducers/application';

export default function configureStore() {
  const store = createStore(rootReducer);
  return store;
}
