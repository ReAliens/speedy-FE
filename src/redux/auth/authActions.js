import {
  SIGNUP_DONE,
  SIGNUP_FAILURE,
  SIGNUP_START,
  LOGIN_DONE,
  LOGIN_START,
  LOGIN_FAILURE,
  LOGOUT_START,
  LOGOUT_FAILURE,
  LOGOUT_DONE,
} from '../constants';
import { toast } from 'react-toastify';

const baseUrl = 'http://localhost:3000';

export const signupStart = () => ({
  type: SIGNUP_START,
});

export const signupFailure = (payload) => ({
  type: SIGNUP_FAILURE,
  payload,
});

export const signupDone = () => ({
  type: SIGNUP_DONE,
});

export const loginStart = () => ({
  type: LOGIN_START,
});

export const loginFailure = (payload) => ({
  type: LOGIN_FAILURE,
  payload,
});

export const loginDone = (payload) => ({
  type: LOGIN_DONE,
  payload,
});

export const logoutStart = () => ({
  type: LOGOUT_START,
});

export const logoutFailure = (payload) => ({
  type: LOGOUT_FAILURE,
  payload,
});

export const logoutDone = (payload) => ({
  type: LOGOUT_DONE,
  payload,
});

export const signupAction = (data) => (dispatch) => {
  dispatch(signupStart());
  return fetch(`${baseUrl}/signup`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: data,
    }),
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.headers.get('Authorization'));
        toast.success('signed up Successfully please login');
        dispatch(signupDone());
        return res.json();
      }
      return res.text().then((text) => Promise.reject(text));
    })
    .then((json) => json)
    .catch((err) => {
      const status = JSON.parse(err);
      toast.error(status.status.message);
      dispatch(signupFailure(status.status.message));
    });
};

export const loginAction = (data) => (dispatch) => {
  dispatch(loginStart());
  fetch(`${baseUrl}/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: data,
    }),
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.headers.get('Authorization'));
        return res.json();
      }
      return res.text().then((text) => Promise.reject(text));
    })
    .then((json) => {
      toast.success('Logged in Successfully');
      dispatch(loginDone(json.data));
    })
    .catch((err) => {
      toast.error(err);
      dispatch(loginFailure(err));
    });
};

export const logoutAction = () => (dispatch) => {
  dispatch(logoutStart());
  fetch(`${baseUrl}/logout`, {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json',
      Authorization: localStorage.getItem('token'),
    },
  })
    .then((res) => {
      if (res.ok) {
        localStorage.removeItem('token');
        toast.success('logged out in Successfully');
        dispatch(logoutDone());
        return res.json();
      }
      return res.json().then((json) => Promise.reject(json));
    })
    .then((json) => json)
    .catch((err) => {
      toast.error(err);
      dispatch(logoutFailure(err));
    });
};
