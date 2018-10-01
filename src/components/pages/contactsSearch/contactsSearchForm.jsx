import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchButton from '../../buttons/contactsSearchButton'
import _ from 'lodash'


class ContactsSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      cities: [],
      fullName: '',
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

  onFullNameChange = (e) => {
    const fullName = e.target && e.target.value;
    this.setState({ fullName });
  }

  isAllParametersEmpty = (companyName, cities, fullName) => {
    return _.isEmpty(companyName) && _.isEmpty(cities) && _.isEmpty(fullName)
    ? null
    : {
      companyName,
      cities,
      fullName,
    }
  }

  render () {
    const { companyName, cities, fullName } = this.state;
    const params = this.isAllParametersEmpty(companyName, cities, fullName);
    const { getContacts } = this.props;
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
        <TextField
          style={styles.textField}
          label="Full Name"
          margin="normal"
          onChange={(e) => this.onFullNameChange(e)}
        />
        <SearchButton
          params={params}
          getContacts={getContacts}
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
    marginTop: 50,
  },
  textField: {
    margin: '10px',
  },
}

export default ContactsSearchForm;
