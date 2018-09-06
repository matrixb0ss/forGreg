import React from 'react';
import { Admin, Resource } from 'react-admin';

import Dashboard from './components/Dashboard';
import { CompanyEdit, CompanyShow, CompanyCreate, CompanyList } from './components/companyList';
import { ContactEdit, ContactShow, ContactCreate, ContactList } from './components/contactsList';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} show={CompanyShow} create={CompanyCreate} edit={CompanyEdit}/>
        <Resource name="contacts" list={ContactList} show={ContactShow} create={ContactCreate} edit={ContactEdit}/>
    </Admin>
);


export default App;