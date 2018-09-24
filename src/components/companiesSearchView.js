import React, { Component } from 'react';
import PageTitle from './companiesPageTitle';
import CompaniesSearchForm from './companiesSearchForm';
import CompaniesTable from './companiesTable';


class CompanySearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companies: [],
            total: '',
        }
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
        return companies.length === 0
        ? null
        : (
            <CompaniesTable
                companies={companies}
                totalResults={totalResults}
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