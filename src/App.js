import React from 'react';
import { Admin, Resource } from 'react-admin';

import { CompanyList } from './components/companyList';
import { CompanyShow } from './components/companyShow';
import { ContactList } from './components/contactsList';
import { ContactShow } from './components/contactShow';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} show={CompanyShow} />
        <Resource name="contacts" list={ContactList} show={ContactShow} />
    </Admin>
);


export default App;