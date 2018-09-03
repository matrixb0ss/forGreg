import axios from 'axios';

const clientId = 'j1ub9d262alvin7t8r7a';
const clientSecret = 'v1gdac67d2pv9sibdav2tqjdksuprhgt9nnbk9m8fjfa4h4q53u7n26lia44';
const grantType = 'cred';

const CORS = 'https://cors-anywhere.herokuapp.com/';
const tokenURL = `${CORS}https://login.insideview.com/Auth/login/v1/token.json`;
// const companiesURL = `${CORS}https://api.insideview.com/api/v1/companies`;


export const fetchCompaniesByToken = () => {
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
    .then(res => {
        if (res.status < 200 || res.status >= 300) {
            throw new Error(res.statusText);
        }
        const { accessToken, expirationTime } = res.data.accessTokenDetails;
        
        getCompaniesData(accessToken);
        localStorage.setItem('token', accessToken);
        localStorage.setItem('tokenExpirationTime', expirationTime);
    });
}


const getCompaniesData = (accessToken) => {
    return axios({
        method: 'get',
        url: 'https://api.insideview.com/api/v1/companies?name=1&website=1&ticker=1',
        headers: {
            accessToken,
        }
    })
    .then(res => res.data.companies);
};


export const deleteAccessToken = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpirationTime');
};