import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export default (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="state" />
        </SimpleShowLayout>
    </Show>
);