import axios from 'axios';
import {
  ITEMS_FETCH_REQUEST,
  ITEMS_FETCH_SUCCESS,
  ITEMS_FETCH_FAILURE,
} from '../constants';

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
