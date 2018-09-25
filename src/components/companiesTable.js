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

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return null;
    const { companies, totalResults } = nextProps;
    this.setState({
      companies,
      totalResults
    })
  }

  showCompaniesDetails = () => {
    return (
        <Link to='/companyDetail'></Link>
    )
  }

  renderShowButton = (name) => {
    const companyName = name.replace(/\s/g,'');
    const { classes } = this.props;
    return (
      <Link to={`/show-companies-details/${companyName}`}>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={this.showCompaniesDetails}
        >
          Show Details
        </Button>
      </Link>
    )
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
            {companies.map((company, index) => {
              return (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {company.name}
                  </TableCell>
                  <TableCell numeric>{company.country}</TableCell>
                  <TableCell numeric>{company.state}</TableCell>
                  <TableCell numeric>{company.city}</TableCell>
                  <TableCell> { this.renderShowButton(company.name) } </TableCell>
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

