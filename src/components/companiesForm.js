import React from 'react';
import { List, TextField, Datagrid, ShowButton } from 'react-admin';
import { SearchForm } from './searchForm';

export const CompanySearchForm = (props) => (
    <List {...props} filters={<SearchForm />}>
         <Datagrid>
            <TextField source="name" />
            <ShowButton />
         </Datagrid>
     </List>
);
