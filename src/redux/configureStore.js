import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import authReducer from './auth/authReducer';
import loginReducer from './auth/loginReducer';
import logoutReducer from './auth/logoutReducer';

const rootReducer = {
  signup: authReducer,
  login: loginReducer,
  logout: logoutReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
});

export default store;
