import React from 'react';
import { Filter, TextInput } from 'react-admin';

export const SearchFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="search" alwaysOn />
    </Filter>
);