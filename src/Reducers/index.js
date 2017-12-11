import { combineReducers } from 'redux';
import StockrReducer from './StockrReducer';

export default combineReducers({
  stockr: StockrReducer
});
