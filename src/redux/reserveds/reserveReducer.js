import {
  RESERVE_ITEM_FETCH_START,
  RESERVE_ITEM_FETCH_SUCCESS,
  RESERVE_ITEM_FETCH_FAILURE,
} from '../constants';

const initialState = {
  isFetching: false,
  data: null,
  error: null,
};

const reservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_ITEM_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case RESERVE_ITEM_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case RESERVE_ITEM_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reservationsReducer;
