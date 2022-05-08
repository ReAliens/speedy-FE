import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import itemsReducer from './items/itemsReducer';

const rootReducer = {
  auth: authReducer,
  item: itemsReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
