import axios from 'axios';
import {
  RESERVE_ITEM_FETCH_START,
  RESERVE_ITEM_FETCH_SUCCESS,
  RESERVE_ITEM_FETCH_FAILURE,
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
