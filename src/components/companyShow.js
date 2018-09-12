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
            <TextField source="dbe" />
            <TextField source="disabled" />
            <TextField source="employees" />
            <TextField source="employeeRange" />
            <TextField source="equifaxId" />
            <TextField source="ethnicity" />
            <TextField source="fax" />
            <TextField source="foundationDate" />
            <TextField source="financialYearEnd" />
            <TextField source="industry" />
            <TextField source="industryCode" />
            <TextField source="gender" />
            <TextField source="latitude" />
            <TextField source="longitude" />
            <TextField source="lgbt" />
            <TextField source="mbe" />
            <TextField source="mostRecentQuarter" />
            <TextField source="name" />
            <TextField source="naics" />
            <TextField source="naicsDescription" />
            <TextField source="phone" />
            <TextField source="parentCompanyId" />
            <TextField source="parentCompanyName" />
            <TextField source="parentCompanyCountry" />
            <TextField source="revenue" />
            <TextField source="revenueCurrency" />
            <TextField source="revenueRange" />
            <TextField source="sic" />
            <TextField source="sicDescription" />
            <TextField source="sources" />
            <TextField source="state" />
            <TextField source="street" />
            <TextField source="subIndustry" />
            <TextField source="subIndustryCode" />
            <TextField source="subsidiary" />
            <TextField source="tickers" />
            <TextField source="ultimateParentCompanyId" />
            <TextField source="ultimateParentCompanyName" />
            <TextField source="ultimateParentCompanyCountry" />
            <TextField source="vbe" />
            <TextField source="wbe" />
            <TextField source="websites" />
            <TextField source="zip" />
        </SimpleShowLayout>
    </Show>
);