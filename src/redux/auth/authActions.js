import axios from 'axios';
import { SIGNUP_DONE, SIGNUP_FAILURE, SIGNUP_START } from '../constants';

const baseUrl = 'http://localhost:3000';

export const signupStart = () => ({
  type: SIGNUP_START,
});

export const signupFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const signupDone = (payload) => ({
  type: SIGNUP_DONE,
  payload,
});

const signupAction = (data) => (dispatch) => {
  dispatch(signupStart());
  return axios
    .post(`${baseUrl}/signup`, { user: data })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.headers.authorization);
        dispatch(signupDone(res.data.data));
      }
      return res.headers;
    })
    .catch((err) => dispatch(signupFailure(err)));
};

export default signupAction;
