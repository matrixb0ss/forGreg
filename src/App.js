import React from 'react';
import { Admin, Resource } from 'react-admin';

import { CompanyList } from './components/companyList';
import { CompanyShow } from './components/companyShow';
import { ContactList } from './components/contactsList';
import { ContactShow } from './components/contactShow';

import CompanySearchView from './components/companiesSearchView';
import ContactsSearchView from './components/contactsSearchView';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} show={CompanyShow} />
        <Resource name="contacts" list={ContactList} show={ContactShow} />
        <Resource name="companies-search-form" options={{ label: 'Find Companies Form' }} list={CompanySearchView} />
        <Resource name="contacts-search-form" options={{ label: 'Find Contacts Form' }} list={ContactsSearchView} />
    </Admin>
);


export default App;
