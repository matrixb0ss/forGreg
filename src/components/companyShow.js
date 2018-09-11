import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const CompanyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="companyBlogProfile" />
            <TextField source="companyFacebookProfile" />
            <TextField source="state" />
            <TextField source="companyStatus" />
            <TextField source="country" />
            <TextField source="fax" />
            <TextField source="industry" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="street" />
            <TextField source="zip" />
        </SimpleShowLayout>
    </Show>
);