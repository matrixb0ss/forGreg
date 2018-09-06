import React from 'react';
import { Filter, TextInput } from 'react-admin';

export const SearchFilter = (props) => (
    console.log(props, '!'),
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);