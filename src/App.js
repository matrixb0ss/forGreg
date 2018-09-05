import React from 'react';
import { Admin, Resource } from 'react-admin';

import CompanyList from './components/companyList';
import ContactsList from './components/contactsList';
import Dashboard from './components/Dashboard';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} />
        <Resource name="contacts" list={ContactsList} />
    </Admin>
);


export default App;