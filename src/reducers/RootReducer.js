import { combineReducers } from 'redux';
import CarListReducer from './CarListReducer';

const RootReducer = combineReducers({
  CarList: CarListReducer,
});

export default RootReducer;
