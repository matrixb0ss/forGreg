import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import SearchButton from '../../buttons/contactsSearchButton'
import _ from 'lodash'


class ContactsSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyName: '',
      fullName: '',
    }
  }

  onCompanyChange = (e) => {
    const companyName = e.target && e.target.value;
    this.setState({ companyName });
  }

  onFullNameChange = (e) => {
    const fullName = e.target && e.target.value;
    this.setState({ fullName });
  }

  isAllParametersEmpty = (companyName = '', fullName = '') => {
    const data = {};
    if (!_.isEmpty(companyName)) data.companyName = companyName;
    if (!_.isEmpty(fullName)) data.fullName = fullName;

    return data
  }

  render () {
    const { companyName, fullName } = this.state;
    const params = this.isAllParametersEmpty(companyName, fullName);
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
