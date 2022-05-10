import { ITEMS_FETCH_REQUEST, ITEMS_FETCH_SUCCESS, ITEMS_FETCH_FAILURE } from '../constants';

const initialState = {
  isFetching: false,
  items: [],
  error: null,
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ITEMS_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ITEMS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.items,
      };
    case ITEMS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default itemsReducer;
