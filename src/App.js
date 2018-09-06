import React from 'react';
import { Admin, Resource } from 'react-admin';

// import CompanyList from './components/companyList';
// import { Editt, Showw, Createe, Listt } from './components/companyDetails';
import { CompanyEdit, CompanyShow, CompanyCreate, CompanyList } from './components/companyList';
import ContactsList from './components/contactsList';
import ContactsDetails from './components/contactDetails';
import Dashboard from './components/Dashboard';

import authProvider from './providers/authProvider';
import customDataProvider from './providers/customDataProvider';

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={customDataProvider} >
        <Resource name="companies" list={CompanyList} show={CompanyShow} create={CompanyCreate} edit={CompanyEdit}/>
        <Resource name="contacts" list={ContactsList} show={ContactsDetails} />
    </Admin>
);


export default App;