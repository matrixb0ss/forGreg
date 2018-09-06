import React from 'react';
import { List, TextField, ShowButton, Datagrid } from 'react-admin';


export default (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="lastName" />
            <ShowButton />
        </Datagrid>
    </List>
);