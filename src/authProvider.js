import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_CHECK } from 'react-admin';
import axios from 'axios';

const clientId = 'j1ub9d262alvin7t8r7a';
const clientSecret = 'v1gdac67d2pv9sibdav2tqjdksuprhgt9nnbk9m8fjfa4h4q53u7n26lia44';
const grantType = 'cred';


export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username } = params;
        localStorage.setItem('username', username);

        axios.post(`${'https://cors-anywhere.herokuapp.com/'}https://login.insideview.com/Auth/login/v1/token.json`, {
            method: 'POST',
            body: JSON.stringify({ clientId, clientSecret, grantType }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.warn(response, 'response');
            if (response.status < 200 || response.status >= 300) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(({ accessToken }) => {
            localStorage.setItem('token', accessToken);
        });
    return Promise.resolve();
    }

    // called when the user clicks on the logout button
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        return Promise.resolve();
    }
    // called when the API returns an error
    if (type === AUTH_ERROR) {
        const { status } = params;
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    }
    // called when the user navigates to a new location
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    }
    return Promise.reject('Unknown method');
};
