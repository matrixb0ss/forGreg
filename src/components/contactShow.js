import React from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';

export const ContactShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="active" />
            <TextField source="companyName" />
            <TextField source="confidenceScore" />
            <TextField source="contactId" />
            <TextField source="email" />
            <TextField source="fullName" />
            <TextField source="peopleId" />
            <TextField source="phone" />
        </SimpleShowLayout>
    </Show>
);