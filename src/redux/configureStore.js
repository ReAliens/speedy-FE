import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import loginReducer from './auth/loginReducer';

const rootReducer = {
  signup: authReducer,
  login: loginReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
