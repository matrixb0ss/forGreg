import React from 'react';
import { List, TextField, Datagrid, ShowButton } from 'react-admin';
import { SearchFilter } from '../../searchFilter';

export const ContactList = (props) => (
  console.log(props),
  <List {...props} filters={<SearchFilter />}>
    <Datagrid>
      <TextField source="firstName" />
      <TextField source="lastName" />
      <TextField source="companyName" />
      <ShowButton />
    </Datagrid>
  </List>
);
