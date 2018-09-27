import React from 'react';
import { Admin, Resource } from 'react-admin';

import { NewCompanyList } from './components/pages/companies/companyList';
import { CompanyShow } from './components/pages/companies/companyShow';
import { ContactList } from './components/pages/contacts/contactsList';
import { ContactShow } from './components/pages/contacts/contactShow';

import CompanySearchView from './components/pages/companiesSearch/companiesSearchView';
import ContactsSearchView from './components/pages/contactsSearch/contactsSearchView';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={NewCompanyList} show={CompanyShow} />
        <Resource name="contacts" list={ContactList} show={ContactShow} />
        <Resource name="companies-search-form" options={{ label: 'Find Companies Form' }} list={CompanySearchView} />
        <Resource name="contacts-search-form" options={{ label: 'Find Contacts Form' }} list={ContactsSearchView} />
    </Admin>
);


export default App;
