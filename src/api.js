import axios from 'axios';

const clientId = 'j1ub9d262alvin7t8r7a';
const clientSecret = 'v1gdac67d2pv9sibdav2tqjdksuprhgt9nnbk9m8fjfa4h4q53u7n26lia44';
const grantType = 'cred';

const CORS = 'https://cors-anywhere.herokuapp.com/';
const tokenURL = `${CORS}https://login.insideview.com/Auth/login/v1/token.json`;


export const getAccessToken = () => {
    return axios({ 
        method: 'post',
        url: tokenURL,
        params: {
            clientId,
            clientSecret,
            grantType
        },
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(response => {
        if (response.status < 200 || response.status >= 300) {
            throw new Error(response.statusText);
        }
        return response;
    })
    .then(({ data: { accessTokenDetails } }) => {
        const { accessToken, expirationTime } = accessTokenDetails;
        
        // getCompanies(accessToken);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('tokenExpirationTime', expirationTime);
    });
}



// const getCompanies = (accessToken) => {
//     return axios({
//         method: 'get',
//         url: 'https://api.insideview.com/api/v1/companies?name=1&website=1&ticker=1',
//         headers: {
//             accessToken,
//         }
//     })
//     .then(res => res)
//     .then(res => console.log(res.data.companies));
// };


// export const deleteAccessToken = () => {
//     localStorage.removeItem('username');
//     localStorage.removeItem('token');
//     localStorage.removeItem('tokenExpirationTime');
// };