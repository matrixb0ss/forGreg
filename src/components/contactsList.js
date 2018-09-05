import React from 'react';
import { List, SimpleList } from 'react-admin';
import { Filter, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);


export default (props) => (
    <List {...props} filters={<PostFilter />} title="Search result:">
        <SimpleList
            primaryText={record => record.contactId}
            onClick={() => console.log('1')}
        />
    </List>
);