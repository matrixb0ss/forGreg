import React from 'react';
import { List, TextField, Datagrid, ShowButton } from 'react-admin';
import { SearchFilter } from './searchFilter';

export const CompanyList = (props) => (
    <List {...props} filters={<SearchFilter />}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton />
        </Datagrid>
    </List>
);
