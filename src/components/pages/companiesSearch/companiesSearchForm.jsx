import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchButton from '../../buttons/companiesSearchButton'
import _ from 'lodash'


export default class CompaniesSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      city: '',
    }
  }

  onCompanyChange = (e) => {
    const name = e.target && e.target.value;
    this.setState({ name });
  }

  onCountryChange = (e) => {
    const city = e.target && e.target.value;
    this.setState({ city });
  }

  isAllParametersEmpty = (name = '', city = '') => {
    const data = {};
    if (!_.isEmpty(name)) data.name = name;
    if (!_.isEmpty(city)) data.city = city;

    return _.isEmpty(name) && _.isEmpty(city)
    ? null
    : data
  }

  render () {
    const { name, city } = this.state;
    const params = this.isAllParametersEmpty(name, city);
    const { getCompanies } = this.props;
    return (
      <div style={styles.formWrapper}>
        <TextField
          style={styles.textField}
          label="Company Name"
          margin="normal"
          onChange={(e) => this.onCompanyChange(e)}
        />
        <TextField
          style={styles.textField}
          label="Cities (separated by coma)"
          margin="normal"
          onChange={(e) => this.onCountryChange(e)}
        />
        <SearchButton
          style={styles.button}
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    marginTop: 50
  },
  textField: {
    margin: '10px',
  },
};
