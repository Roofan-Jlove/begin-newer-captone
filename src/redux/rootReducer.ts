import { combineReducers } from 'redux';
import cartReducer from '@/app/Cart/CartSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
