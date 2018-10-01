import React, { Component } from 'react';
import PageTitle from './companiesPageTitle';
import CompaniesSearchForm from './companiesSearchForm';
import CompaniesTable from './companiesTable';


const EMPTY_COMPANIES = [
  { name: ' ', country: ' ', state: ' ', city: ' ' },
  { name: ' ', country: ' ', state: ' ', city: ' ' },
  { name: ' ', country: ' ', state: ' ', city: ' ' },
  { name: ' ', country: ' ', state: ' ', city: ' ' },
  { name: ' ', country: ' ', state: ' ', city: ' ' },
];

class CompanySearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      total: '',
    }
  }

  renderEmptyTable = (companies) => {
    const error = 'No such companies, please enter valid data';
    return (
      <div>
        {!companies ? <div>{error}</div> : null}
        <CompaniesTable
          data={EMPTY_COMPANIES}
          renderShowButton={false}
        />
      </div>
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
    const totalResults = (total < 100000) ? total : 100000;
    return !companies || companies.length === 0
    ? this.renderEmptyTable(companies)
    : (
      <CompaniesTable
        type='companies'
        data={companies}
        totalResults={totalResults}
        renderShowButton={true}
      />
    )
  }

  render () {
    return (
      <div>
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
