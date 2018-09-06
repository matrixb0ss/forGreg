import React from 'react';
import { List, TextField, Datagrid, ShowButton, EditButton } from 'react-admin';
import { Show, SimpleShowLayout, Edit, Create, DisabledInput, LongTextInput, SimpleForm, TextInput } from 'react-admin';

export const CompanyShow = (props) => (
    console.log(props, "????"),
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="state" />
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

export const CompanyList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <ShowButton />
            <EditButton />
        </Datagrid>
    </List>
);