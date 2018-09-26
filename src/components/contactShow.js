import React from 'react';
import { TextField, Show, SimpleShowLayout } from 'react-admin';

export const ContactShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="active" />
      <TextField source="age" />
      <TextField source="companyId" />
      <TextField source="companyName" />
      <TextField source="confidenceScore" />
      <TextField source="contactId" />
      <TextField source="description" />
      <TextField source="email" />
      <TextField source="education" />
      <TextField source="facebookHandle" />
      <TextField source="firstName" />
      <TextField source="fullName" />
      <TextField source="imageUrl" />
      <TextField source="jobFunctions" />
      <TextField source="jobLevels" />
      <TextField source="lastName" />
      <TextField source="linkedinHandle" />
      <TextField source="phone" />
      <TextField source="peopleId" />
      <TextField source="sources" />
      <TextField source="salary" />
      <TextField source="salaryCurrency" />
      <TextField source="salaryCurrency" />
      <TextField source="titles" />
      <TextField source="twitterHandle" />
    </SimpleShowLayout>
  </Show>
);
