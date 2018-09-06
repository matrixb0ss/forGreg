import React from 'react';
import { List, TextField, Datagrid, ShowButton, EditButton } from 'react-admin';
import { Show, SimpleShowLayout, Edit, Create, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'react-admin';
import { SearchFilter } from './filter';

export const CompanyList = (props) => (
    <List {...props} filters={<SearchFilter />}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton />
            <EditButton />
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


export const CompanyEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const CompanyCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
