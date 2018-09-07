import React from 'react';
import { List, TextField, Datagrid, ShowButton, Show, SimpleShowLayout } from 'react-admin';
import { SearchFilter } from './filter';

export const ContactList = (props) => (
    <List {...props} filters={<SearchFilter />}>
        <Datagrid>
            <TextField source="firstName" />
            <TextField source="lastName" />
            <TextField source="companyName" />
            <ShowButton />
        </Datagrid>
    </List>
);

export const ContactShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="active" />
            <TextField source="companyName" />
            <TextField source="confidenceScore" />
            <TextField source="contactId" />
            <TextField source="email" />
            <TextField source="fullName" />
            <TextField source="peopleId" />
            <TextField source="phone" />
        </SimpleShowLayout>
    </Show>
);