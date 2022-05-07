import { LOGIN_START, LOGIN_DONE, LOGIN_FAILURE } from '../constants';

const initialState = {
  loading: false,
  error: undefined,
  data: [],
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default loginReducer;
