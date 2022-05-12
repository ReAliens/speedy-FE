import axios from 'axios';
import {
  RESERVE_ITEM_FETCH_START,
  RESERVE_ITEM_FETCH_SUCCESS,
  RESERVE_ITEM_FETCH_FAILURE,
  RESERVATIONS_FETCH_FAILURE,
  RESERVATIONS_FETCH_START,
  RESERVATIONS_FETCH_SUCCESS,
  RESERVATIONS_DELETE_FETCH_START,
  RESERVATIONS_DELETE_FETCH_SUCCESS,
  RESERVATIONS_DELETE_FETCH_FAILURE,
} from '../constants';

const baseurl = 'http://localhost:3000/api/v1';

export const addReservationRequest = () => ({
  type: RESERVE_ITEM_FETCH_START,
});

export const addReservationSuccess = (payload) => ({
  type: RESERVE_ITEM_FETCH_SUCCESS,
  payload,
});
export const addReservationFailure = (payload) => ({
  type: RESERVE_ITEM_FETCH_FAILURE,
  payload,
});

export const reservationsRequest = () => ({
  type: RESERVATIONS_FETCH_START,
});

export const reservationsSuccess = (payload) => ({
  type: RESERVATIONS_FETCH_SUCCESS,
  payload,
});
export const reservationsFailure = (payload) => ({
  type: RESERVATIONS_FETCH_FAILURE,
  payload,
});

export const removeReservationRequest = () => ({
  type: RESERVATIONS_DELETE_FETCH_START,
});

export const removeReservationSuccess = (payload) => ({
  type: RESERVATIONS_DELETE_FETCH_SUCCESS,
  payload,
});
export const removeReservationFailure = (payload) => ({
  type: RESERVATIONS_DELETE_FETCH_FAILURE,
  payload,
});

export const addReservation = (data, user) => async (dispatch) => {
  dispatch(addReservationRequest());
  console.log(data);
  axios
    .post(`${baseurl}/items/${data.item}/reserveds`, {
      reserved: {
        name: data.name,
        city: data.city,
        started_at: data.started_at,
        ended_at: data.ended_at,
        item_id: data.item,
        user_id: user.id,
      },
    })
    .then((res) => {
      const reservation = res.data;
      dispatch(addReservationSuccess(reservation));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(addReservationFailure(error));
    });
};

export const getReservations = () => async (dispatch) => {
  dispatch(reservationsRequest());
  axios
    .get(`${baseurl}/reserveds`)
    .then((res) => {
      const reservations = res.data;
      dispatch(reservationsSuccess(reservations));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(reservationsFailure(error));
    });
};

export const removeReservation = (item_id, id) => (dispatch) => {
  dispatch(removeReservationRequest());
  return axios
    .delete(`${baseurl}/items/${item_id}/reserveds/${id}`)
    .then((res) => {
      const deleted = res.data;
      dispatch(removeReservationSuccess(deleted));
    })
    .catch((err) => {
      const { error } = err.response.data;
      dispatch(removeReservationFailure(error));
    });
};
