import React, { Component } from 'react';
import PageTitle from './companiesPageTitle';
import CompaniesSearchForm from './companiesSearchForm';
import CompaniesTable from './companiesTable';


const EMPTY_COMPANIES = [
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
  { name: ' ', country: ' ', state: ' ', city: ' '},
];


class CompanySearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      total: '',
    }
  }

  renderEmptyTable = () => {
    return (
      <CompaniesTable
        companies={EMPTY_COMPANIES}
        totalResults={10}
        renderShowButton={false}
      />
    )
  }

  getCompanies = (json) => {
    const companies = json && json.companies;
    const total = json && json.totalResults;
    this.setState({
      companies,
      total
    })
  }

  renderCompaniesTable = () => {
    const { companies, total } = this.state;
    console.log(companies);
    const totalResults = (total < 100000) ? total : 100000;
    return companies.length === 0
    ? this.renderEmptyTable()
    : (
      <CompaniesTable
        companies={companies}
        totalResults={totalResults}
        renderShowButton={true}
      />
    )
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <PageTitle />
        <CompaniesSearchForm
          getCompanies={this.getCompanies}
        />
        { this.renderCompaniesTable() }
      </div>
    )
  }
}


export default CompanySearchView;
