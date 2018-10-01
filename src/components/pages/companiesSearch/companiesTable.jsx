import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { EnhancedTableHead } from '../.././tableHead';
import TableToolbar from '../.././tableToolbar';
// import MenuItem from '@material-ui/core/MenuItem';
// import Select from '@material-ui/core/Select';
// import Input from '@material-ui/core/Input';


const rows = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Company Name' },
  { id: 'country', numeric: false, disablePadding: false, label: 'Country' },
  { id: 'state', numeric: false, disablePadding: false, label: 'State' },
  { id: 'city', numeric: false, disablePadding: false, label: 'City' },
  { id: 'details', numeric: false, disablePadding: false, label: 'Company Details' },
];


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  tablecell: {
    textAlign: 'left'
  },
});


class EnhancedTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'calories',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 5,
    };
  }

  componentWillMount() {
    const { data } = this.props;
    this.setState({
      data,
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) return null;
    const { data } = nextProps;
    this.setState({
      data,
    })
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = event => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;

  renderShowButton = (name) => {
    const companyName = name.replace(/\s/g,'');
    const { classes, renderShowButton } = this.props;
    return renderShowButton && (
      <Link to={`/show-company-details/${companyName}`}>
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

  desc = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  stableSort = (array, cmp) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  getSorting = (order, orderBy) => {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
  }


  // renderSearchField = (props) => {
  //   const { theme } = props;
  //   const ITEM_HEIGHT = 48;
  //   const ITEM_PADDING_TOP = 8;
  //   const MenuProps = {
  //     PaperProps: {
  //       style: {
  //         maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
  //         width: 250,
  //       },
  //     },
  //   };
  //
  //   return (
  //     <Select
  //       multiple
  //       value={this.state.name}
  //       onChange={(event, index, value) => {
  //         this.setState({ columtToQuery: value });
  //       }}
  //       input={<Input id="select-multiple" />}
  //       MenuProps={MenuProps}
  //       floatingLabel="Select a column"
  //     >
  //       {rows.map(row => (
  //         <MenuItem
  //           key={row.label}
  //           value={row.label}
  //           primaryText={row.label}
  //           style={{
  //             fontWeight:
  //               this.state.name.indexOf(row.label) === -1
  //                 ? theme.typography.fontWeightRegular
  //                 : theme.typography.fontWeightMedium,
  //           }}
  //         >
  //           {row.label}
  //         </MenuItem>
  //       ))}
  //     </Select>
  //   )
  // }


  render() {
    const { classes } = this.props;
    const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <TableToolbar
          numSelected={selected.length}
          page='Companies'
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              rows={rows}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {this.stableSort(data, this.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((company, index) => {
                  const isSelected = this.isSelected(company.id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, company.id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={company.id || index}
                      selected={isSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {company.name}
                      </TableCell>
                      <TableCell className={classes.tablecell} numeric>{company.country}</TableCell>
                      <TableCell className={classes.tablecell} numeric>{company.state}</TableCell>
                      <TableCell className={classes.tablecell} numeric>{company.city}</TableCell>
                      <TableCell> { this.renderShowButton(company.name) } </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);
