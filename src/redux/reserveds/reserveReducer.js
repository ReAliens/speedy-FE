import {
  RESERVE_ITEM_FETCH_START,
  RESERVE_ITEM_FETCH_SUCCESS,
  RESERVE_ITEM_FETCH_FAILURE,
  RESERVATIONS_FETCH_FAILURE,
  RESERVATIONS_FETCH_START,
  RESERVATIONS_FETCH_SUCCESS,
  RESERVATIONS_DELETE_FETCH_FAILURE,
  RESERVATIONS_DELETE_FETCH_START,
  RESERVATIONS_DELETE_FETCH_SUCCESS,
} from '../constants';
import removeReservation from './reservedsUtilities';

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
    case RESERVATIONS_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case RESERVATIONS_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };
    case RESERVATIONS_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case RESERVATIONS_DELETE_FETCH_START:
      return {
        ...state,
        isFetching: true,
      };
    case RESERVATIONS_DELETE_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: removeReservation(state.data, action.payload),
      };
    case RESERVATIONS_DELETE_FETCH_FAILURE:
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
