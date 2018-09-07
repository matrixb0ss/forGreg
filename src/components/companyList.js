import React from 'react';
import { List, TextField, Datagrid, ShowButton } from 'react-admin';
import { Show, SimpleShowLayout } from 'react-admin';
import { SearchFilter } from './filter';

export const CompanyList = (props) => (
    <List {...props} filters={<SearchFilter />}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const CompanyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="companyBlogProfile" />
            <TextField source="companyFacebookProfile" />
            <TextField source="state" />
            <TextField source="companyStatus" />
            <TextField source="country" />
            <TextField source="fax" />
            <TextField source="industry" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="street" />
            <TextField source="zip" />
        </SimpleShowLayout>
    </Show>
);