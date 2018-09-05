import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';



export default (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="lastname" />
        </Datagrid>
    </List>
);
