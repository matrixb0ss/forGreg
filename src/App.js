import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import simpleRestProvider from 'ra-data-simple-rest';
// import { stringify } from 'query-string';
import { PostList } from './posts';
import Dashboard from './Dashboard';

import authProvider from './authProvider';
import customDataProvider from './customDataProvider';

// const CORS = `https://cors-anywhere.herokuapp.com/`;
// const API_URL = `${CORS}https://api.insideview.com/api/v1`;

// const httpClient = (url, options = {}) => {
//     const accessToken = localStorage.getItem('token');
//     const query = { name: 1, website: 1 };
//     if (!options.headers) {
//         options.headers = new Headers({
//             Access: 'application/json',
//             // 'Content-Range': 10,
//             // 'Authorization': `Bearer ${accessToken}`,
//             accessToken,
//         });
//     }
//     return fetchUtils.fetchJson(`${url}&${stringify(query)}`, options);
// }
// const dataProvider = simpleRestProvider(API_URL,  httpClient);

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={PostList} />
        <Resource name="contacts" list={PostList} />
    </Admin>
);


export default App;