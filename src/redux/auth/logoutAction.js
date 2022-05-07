import axios from 'axios';

const baseUrl = 'http://localhost:3000';

export const logoutStart = () => ({
    type: 'LOGOUT_START',
});

export const logoutFailure = (payload) => ({
    type: 'LOGOUT_FAILURE',
    payload,
});

export const logoutDone = (payload) => ({
    type: 'LOGOUT_DONE',
    payload,
});

const logoutAction = () => (dispatch) => {
    dispatch(logoutStart());
    return axios
        .delete(`${baseUrl}/logout`)
        .then((res) => {
            if (res.status === 200) {
                dispatch(logoutDone(res.data.data));
                localStorage.removeItem('token');
            }
            return res.headers;
        })
        .catch((err) => dispatch(logoutFailure(err)));
};

export default logoutAction;
