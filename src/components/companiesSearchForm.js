import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchButton from './companiesSearchButton' 
import _ from 'lodash'

class CompaniesSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: '',
            cities: '',
        }
    }

    onCompanyChange = (e) => {
        const companyName = e.target && e.target.value;
        this.setState({ companyName });
    }

    onCountryChange = (e) => {
        const cities = e.target && e.target.value;
        this.setState({ cities });
    }

    isAllParametersEmpty = (companyName, cities) => {
        return _.isEmpty(companyName) && _.isEmpty(cities)
        ? null
        : {
            companyName,
            cities
        }
    }

    render () {
        const { companyName, cities } = this.state;
        const params = this.isAllParametersEmpty(companyName, cities);
        const { getCompanies } = this.props;
        return (
            <div style={styles.formWrapper}>
                <TextField
                    label="Company Name"
                    margin="normal"
                    onChange={(e) => this.onCompanyChange(e)}
                />
                <TextField
                    label="Cities (separated by coma)"
                    margin="normal"
                    onChange={(e) => this.onCountryChange(e)}
                />
                <SearchButton
                    params={params}
                    getCompanies={getCompanies}
                />
            </div>
        )
    }
}

const styles = {
    formWrapper: {
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}

export default CompaniesSearchForm;
