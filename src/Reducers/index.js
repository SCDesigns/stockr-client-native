import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
// import AppNavigation from '../Navigation/AppNavigation'
import navReducer from './NavReducer'

export default combineReducers({
    crypto: CryptoReducer,
    nav: navReducer
});
