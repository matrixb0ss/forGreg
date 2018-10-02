import React, { Component } from 'react';
import PageTitle from './contactsPageTitle';
import ContactsSearchForm from './contactsSearchForm';
import ContactsTable from './contactsTable';

const EMPTY_CONTACTS = [
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

  renderEmptyTable = (contacts) => {
    const error = 'No such contacts, please fill in both fields or enter a valid data';
    return (
      <div>
        {!contacts ? <div>{error}</div> : null}
        <ContactsTable
          type='contacts'
          data={EMPTY_CONTACTS}
          renderShowButton={false}
        />
      </div>
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
    return !contacts || contacts.length === 0
    ? this.renderEmptyTable(contacts)
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
      <div>
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
