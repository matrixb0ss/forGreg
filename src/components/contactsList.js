import React from 'react';
import { List, TextField, Datagrid, ShowButton, EditButton } from 'react-admin';
import { Show, SimpleShowLayout, Edit, Create, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'react-admin';


export const ContactList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="lastName" />
            <TextField source="companyName" />
            <ShowButton />
            <EditButton />
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


export const ContactEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const ContactCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
