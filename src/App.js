import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './components/Dashboard';
import { CompanyShow, CompanyList } from './components/companyList';
import { ContactShow, ContactList } from './components/contactsList';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} show={CompanyShow} />
        <Resource name="contacts" list={ContactList} show={ContactShow} />
    </Admin>
);


export default App;