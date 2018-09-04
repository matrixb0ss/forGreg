import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';



export const PostList = (props) => (
    <List {...props}>
        <Datagrid>
            {/* <TextField source="companyId" /> */}
            {/* <TextField source="website" /> */}
            {/* <TextField source="ticker" /> */}
            <TextField source="name" />
            {/* <TextField source="state" /> */}
        </Datagrid>
    </List>
);
