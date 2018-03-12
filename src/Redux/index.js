import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import navReducer from '../Reducers/NavReducer';
import CryptoReducer from '../Reducers/CryptoReducer';

export default () => {
  const rootReducer = combineReducers({
    nav: navReducer,
    crypto: CryptoReducer
  })

  return createStore(rootReducer)
}
