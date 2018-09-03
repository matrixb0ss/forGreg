import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import { PostList } from './posts';
import Dashboard from './Dashboard';

import authProvider from './authProvider';
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');


const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
        <Resource name="posts" list={PostList} />
    </Admin>
);


export default App;