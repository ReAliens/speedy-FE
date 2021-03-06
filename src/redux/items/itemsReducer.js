import {
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_FAILURE,
  SINGLE_ITEM_FETCH_REQUEST,
  SINGLE_ITEM_FETCH_SUCCESS,
  SINGLE_ITEM_FETCH_FAILURE,
  ADD_NEW_ITEM_REQUEST,
  ADD_NEW_ITEM_SUCCESS,
  ADD_NEW_ITEM_FAILURE,
  Delete_ITEM_REQUEST,
  Delete_ITEM_SUCCESS,
  Delete_ITEM_FAILURE,
} from '../constants';

const initialState = {
  isFetching: false,
  items: [],
  error: null,
};

export const itemsReducer = (state = initialState, action) => {
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

export const singleItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SINGLE_ITEM_FETCH_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case SINGLE_ITEM_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.item,
      };
    case SINGLE_ITEM_FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const addNewItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case ADD_NEW_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.item,
      };
    case ADD_NEW_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export const deleteItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case Delete_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case Delete_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.item,
      };
    case Delete_ITEM_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}
