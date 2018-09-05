import React from 'react';
import { Show, SimpleShowLayout, TextField, DateField, EditButton, RichTextField } from 'react-admin';

export const CompaniesShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="state" />
            <RichTextField source="body" />
            <DateField label="Publication date" source="created_at" />
        </SimpleShowLayout>
    </Show>
);