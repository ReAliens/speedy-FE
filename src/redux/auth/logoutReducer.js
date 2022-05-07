import { LOGOUT_DONE, LOGOUT_FAILURE, LOGOUT_START } from '../constants';

const initialState = {
  loading: false,
  error: undefined,
  data: [],
};

const logoutReducer = (state = initialState, action) => {
  switch (action.type) {
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
        data: action.payload,
      };
    default:
      return state;
  }
};

export default logoutReducer;
