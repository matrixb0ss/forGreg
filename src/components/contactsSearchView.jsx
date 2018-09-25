import React, { Component } from 'react';
import PageTitle from './contactsPageTitle';
import ContactsSearchForm from './contactsSearchForm';
import ContactsTable from './contactsTable';


class ContactsSearchView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            total: '',
        }
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
        ? null
        : (
            <ContactsTable
                contacts={contacts}
                totalResults={totalResults}
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