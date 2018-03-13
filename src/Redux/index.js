import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import NavReducer from '../Reducers/NavReducer';
import CryptoReducer from '../Reducers/CryptoReducer';
import AuthReducer from '../Reducers/AuthReducer';

const rootReducer = combineReducers({
  nav: NavReducer,
  crypto: CryptoReducer,
  auth: AuthReducer
});

export default rootReducer;
