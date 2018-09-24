import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


class SimpleTable extends Component {
  constructor(props) {
      super(props);
      this.state = {
        companies: [],
        totalResults: ''
      }
  }
  
  componentWillMount() {
    const { companies, totalResults } = this.props;
    this.setState({
      companies,
      totalResults
    })
  }
    
  render () {
    const { classes } = this.props;
    const { companies } = this.state;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Company Name</TableCell>
              <TableCell numeric>Country</TableCell>
              <TableCell numeric>State</TableCell>
              <TableCell numeric>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {companies.map(company => {
              return (
                <TableRow key={company.zip}>
                  <TableCell component="th" scope="row">
                    {company.name}
                  </TableCell>
                  <TableCell numeric>{company.country}</TableCell>
                  <TableCell numeric>{company.state}</TableCell>
                  <TableCell numeric>{company.city}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);

