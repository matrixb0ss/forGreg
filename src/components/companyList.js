import React from 'react';
import { List, SimpleList, TextField, Datagrid, Filter, TextInput } from 'react-admin';


const CompaniesFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export default (props) => (
    <List {...props} title="Companies list:" filters={<CompaniesFilter />}>
        <SimpleList
            primaryText={record => record.name} 
            onClick={() => console.log('1') }
        /> 
    </List>
);