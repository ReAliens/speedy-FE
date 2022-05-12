import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import {
  itemsReducer,
  singleItemReducer,
  addNewItemReducer,
  deleteItemReducer,
} from './items/itemsReducer';
import reservationsReducer from './reserveds/reserveReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'items'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  singleItem: singleItemReducer,
  addNewItem: addNewItemReducer,
  reservations: reservationsReducer,
  deleteItem: deleteItemReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk, logger],
});

export default store;
