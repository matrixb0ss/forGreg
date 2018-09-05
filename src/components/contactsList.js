import React from 'react';
import { List, SimpleList } from 'react-admin';
import { Filter, TextInput } from 'react-admin';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

const ContactsFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);


const CompaniesShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="state" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);

export default (props) => (
    <List {...props} filters={<ContactsFilter />} title="Contacts list:">
        <SimpleList
            primaryText={record => record.lastName}
            onClick={() => <CompaniesShow {...props}/>}
        />
    </List>
);