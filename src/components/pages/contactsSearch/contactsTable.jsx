import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'


class ContactsTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      totalResults: ''
    }
  }

  componentWillMount() {
    const { contacts, totalResults } = this.props;
    this.setState({
      contacts,
      totalResults
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return null;
    const { contacts, totalResults } = nextProps;
    this.setState({
      contacts,
      totalResults
    })
  }

  renderShowButton = (id) => {
    const { classes } = this.props;
    return (
      <Link to={`/show-contacts-details/${id}`}>
        <Button
          variant="outlined"
          className={classes.button}
        >
          Show Details
        </Button>
      </Link>
    )
  }

  render () {
    const { classes } = this.props;
    const { contacts } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>ID</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contact) => {
              return (
                <TableRow key={contact.id}>
                  <TableCell component="th" scope="row">{contact.companyName}</TableCell>
                  <TableCell>{contact.firstName}</TableCell>
                  <TableCell>{contact.lastName}</TableCell>
                  <TableCell>{contact.id}</TableCell>
                  <TableCell> { this.renderShowButton(contact.id) } </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  button: {
    margin: theme.spacing.unit,
    marginLeft: 50,
  },
});

ContactsTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactsTable);
