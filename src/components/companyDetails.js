import React from 'react';
import { Show, SimpleShowLayout } from 'react-admin';
import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'react-admin';

export const Showw = (props) => (
    <Show {...props} >
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="state" />
        </SimpleShowLayout>
    </Show>
);


export const Editt = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const Createe = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);