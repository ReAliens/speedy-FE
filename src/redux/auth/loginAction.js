import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const loginStart = () => ({
  type: 'LOGIN_START',
});

export const loginFailure = (payload) => ({
  type: 'LOGIN_FAILURE',
  payload,
});

export const loginDone = (payload) => ({
  type: 'LOGIN_DONE',
  payload,
});

const loginAction = (data) => (dispatch) => {
  dispatch(loginStart());
  return axios
    .post(`${baseUrl}/login`, { user: data })
    .then((res) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.headers.authorization);
        dispatch(loginDone(res.data.data));
      }
      return res.headers;
    })
    .catch((err) => dispatch(loginFailure(err)));
};

export default loginAction;
