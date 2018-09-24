import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchButton from './searchButton' 


class CompaniesSearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyName: ''            
        }
    }
    
    onTextChange = (e) => {
        const companyName = e.target && e.target.value;
        this.setState({ companyName });
    }

    render () {
        const { companyName } = this.state;
        const { getCompanies } = this.props;
        return (
            <div style={{ textAlign: 'center' }}>
                <TextField
                    required={true}
                    label="Company Name"
                    margin="normal"
                    onChange={(e) => this.onTextChange(e)}
                />
                <SearchButton
                    companyName={companyName}
                    getCompanies={getCompanies}
                />
            </div>
        )
    }
}

export default CompaniesSearchForm;