import React from 'react';
import { Filter, TextInput } from 'react-admin';

export const SearchForm = (props) => (
    <Filter {...props}>
        <TextInput
            label="Company name"
            source="companyName"
            style={{ float: 'left' }}
            alwaysOn />
        {/* <TextInput label="Search" source="search" alwaysOn /> */}
        {/* <TextInput label="Search" source="search" alwaysOn /> */}
    </Filter>
);