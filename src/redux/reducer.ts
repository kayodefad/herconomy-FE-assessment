import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import userReducer from './features/user/userSlice';

const reducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default reducer;
