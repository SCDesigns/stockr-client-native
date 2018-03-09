import { combineReducers } from 'redux';
import CryptoReducer from './CryptoReducer';
import AppNavigation from '../Navigation/AppNavigation'

export default combineReducers({
    crypto: CryptoReducer,
    nav: navReducer
});
