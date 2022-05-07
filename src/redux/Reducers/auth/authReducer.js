import { SIGNUP_DONE, SIGNUP_FAILURE, SIGNUP_START } from '../constants';

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
    default:
      return state;
  }
};

export default authReducer;
