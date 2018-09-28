import React, { Component } from 'react';
import PageTitle from './contactsPageTitle';
import ContactsSearchForm from './contactsSearchForm';
import ContactsTable from '../.././newTable';

const EMPTY_CONTACTS = [
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

class ContactsSearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      total: '',
    }
  }

  renderEmptyTable = () => {
    return (
      <ContactsTable
        type='contacts'
        data={EMPTY_CONTACTS}
        totalResults={10}
        renderShowButton={false}
      />
    )
  }

  getContacts = (json) => {
    const contacts = json && json.contacts;
    const total = json && json.totalResults;
    this.setState({
      contacts,
      total
    })
  }

  renderContactsTable = () => {
    const { contacts, total } = this.state;
    const totalResults = (total < 100000) ? total : 100000;
    return contacts.length === 0
    ? this.renderEmptyTable()
    : (
      <ContactsTable
        type='contacts'
        data={contacts}
        totalResults={totalResults}
        renderShowButton={true}
      />
    )
  }

  render () {
    return (
      <div style={{ textAlign: 'center' }}>
        <PageTitle />
        <ContactsSearchForm
            getContacts={this.getContacts}
        />
        { this.renderContactsTable() }
      </div>
    )
  }
}


export default ContactsSearchView;
