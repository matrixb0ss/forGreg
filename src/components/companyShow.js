import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';

export const CompanyShow = (props) => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="city" />
            <TextField source="companyBlogProfile" />
            <TextField source="companyFacebookProfile" />
            <TextField source="companyId" />
            <TextField source="companyLinkedInProfile" />
            <TextField source="companyStatus" />
            <TextField source="companyTaxId" />
            <TextField source="companyTwitterProfile" />
            <TextField source="companyType" />
            <TextField source="country" />
            <TextField source="employees" />
            <TextField source="equifaxId" />
            <TextField source="fax" />
            <TextField source="foundationDate" />
            <TextField source="industry" />
            <TextField source="industryCode" />
            <TextField source="latitude" />
            <TextField source="longitude" />
            <TextField source="naics" />
            <TextField source="naicsDescription" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="revenue" />
            <TextField source="revenueCurrency" />
            <TextField source="sic" />
            <TextField source="sicDescription" />
            <TextField source="state" />
            <TextField source="street" />
            <TextField source="subIndustry" />
            <TextField source="subIndustryCode" />
            <TextField source="subsidiary" />
            <TextField source="websites" />
            <TextField source="zip" />
        </SimpleShowLayout>
    </Show>
);