import { createStore, combineReducers } from 'redux';
import user from './reducers/userReducer';

export default createStore(combineReducers({user}));
