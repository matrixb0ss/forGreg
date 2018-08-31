import simpleRestProvider from 'ra-data-simple-rest';


const httpClient = (url, options = {}) => {
    options.user = {
        authenticated: true,
        token: 'SRTRDFVESGNJYTUKTYTHRG'
    }
    return fetchUtils.fetchJson(url, options);
}
const dataProvider = simpleRestProvider('http://path.to.my.api/', httpClient);

// https://login.insideview.com/Auth/login/v1/token.json