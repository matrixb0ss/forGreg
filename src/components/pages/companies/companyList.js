import React, { Component } from 'react';
import { List, TextField, Datagrid, ShowButton } from 'react-admin';
import { SearchFilter } from '../../searchFilter';
import CompaniesSearchForm from '../companiesSearch/companiesSearchForm';


const CompanyList = (props) => (
    <List {...props} filters={<SearchFilter />}>
      <Datagrid>
        <TextField source="name" />
        <ShowButton />
      </Datagrid>
    </List>
);

export class NewCompanyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>
        <CompaniesSearchForm />
        <List {...this.props} filters={<SearchFilter />}>
        <Datagrid>
          <TextField source="name" />
          <ShowButton />
        </Datagrid>
        </List>
      </div>
    )
  }
}
