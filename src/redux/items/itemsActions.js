import axios from 'axios';
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
import { toast } from 'react-toastify';

const baseurl = 'http://localhost:3000/api/v1/items';

export const itemsFetchRequest = () => ({
  type: ITEMS_FETCH_REQUEST,
});

export const itemsFetchSuccess = (items) => ({
  type: ITEMS_FETCH_SUCCESS,
  items,
});
export const itemsFetchFailure = (error) => ({
  type: ITEMS_FETCH_FAILURE,
  error,
});

export const getItems = () => async (dispatch) => {
  dispatch(itemsFetchRequest());
  axios
    .get(baseurl)
    .then((res) => {
      const items = res.data;
      dispatch(itemsFetchSuccess(items));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(itemsFetchFailure(error));
    });
};

export const singleItemFetchRequest = () => ({
  type: SINGLE_ITEM_FETCH_REQUEST,
});

export const singleItemFetchSuccess = (item) => ({
  type: SINGLE_ITEM_FETCH_SUCCESS,
  item,
});
export const singleItemFetchFailure = (error) => ({
  type: SINGLE_ITEM_FETCH_FAILURE,
  error,
});

export const getSingleItem = (itemId) => async (dispatch) => {
  dispatch(singleItemFetchRequest());
  axios
    .get(`${baseurl}/${itemId}`)
    .then((res) => {
      const item = res.data;
      dispatch(singleItemFetchSuccess(item));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(singleItemFetchFailure(error));
    });
};

export const addNewItemRequest = () => ({
  type: ADD_NEW_ITEM_REQUEST,
});

export const addNewItemSuccess = (item) => ({
  type: ADD_NEW_ITEM_SUCCESS,
  item,
});

export const addNewItemFailure = (error) => ({
  type: ADD_NEW_ITEM_FAILURE,
  error,
});

export const addNewItem = (item) => async (dispatch) => {
  dispatch(addNewItemRequest());
  axios
    .post(baseurl, item)
    .then((res) => {
      const item = res.data;
      toast.success('Car Added Successgully');
      dispatch(addNewItemSuccess(item));
    })
    .catch((err) => {
      const { error } = err.response.data;
      toast.error('Something went wrong');
      dispatch(addNewItemFailure(error));
    });
};

export const deleteItemRequest = () => ({
  type: Delete_ITEM_REQUEST,
});

export const deleteItemSuccess = (item) => ({
  type: Delete_ITEM_SUCCESS,
  item,
});

export const deleteItemFailure = (error) => ({
  type: Delete_ITEM_FAILURE,
  error,
});

export const deleteItem = (itemId) => async (dispatch) => {
  dispatch(deleteItemRequest());
  axios
    .delete(`${baseurl}/${itemId}`)
    .then((res) => {
      const item = res.data;
      toast.success('Car deleted Successgully');
      dispatch(deleteItemSuccess(item));
    })
    .catch((err) => {
      const { error } = err.response.data;
      toast.error(error);
      dispatch(deleteItemFailure(error));
    });
};
