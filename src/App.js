import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './posts';
import Dashboard from './Dashboard';

import authProvider from './authProvider';

const CORS = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `${CORS}https://api.insideview.com/api/v1`;

const httpClient = (url, options = {}) => {
    const accessToken = localStorage.getItem('token');
    const query = {
        "name": 1, "website": 1, "ticker": 1
    };

    // options.query = query;
    options.headers = new Headers({
        Accept: 'application/json',
        accessToken,
        query
    });
    console.log(options);
    return fetchUtils.fetchJson(url, options);
}

const dataProvider = jsonServerProvider(API_URL, httpClient);


const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name="companies" list={PostList} />
    </Admin>
);


export default App;