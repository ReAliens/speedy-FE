import {
  LOGIN_DONE,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGOUT_DONE,
  LOGOUT_FAILURE,
  LOGOUT_START,
  SIGNUP_DONE,
  SIGNUP_FAILURE,
  SIGNUP_START,
} from '../constants';

const initialState = {
  loading: false,
  error: undefined,
  data: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SIGNUP_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGIN_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOGOUT_DONE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
