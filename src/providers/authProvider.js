import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import { getAccessToken } from './../api'

export default async (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username } = params;
        localStorage.setItem('username', username);
        getAccessToken();

        return Promise.resolve();
    }

    if (type === AUTH_LOGOUT) {
        return Promise.resolve();
    }

    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }

    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
