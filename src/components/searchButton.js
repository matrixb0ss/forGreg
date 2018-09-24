import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const API_URL = `https://api.insideview.com/api/v1/target/companies`;


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class SearchButton extends Component {
  constructor(props) {
      super(props);
      this.state = {
      }
  }
  
  fetchData = (companyName) => {
    const accessToken = localStorage.getItem('token');
    return axios({ 
        method: 'post',
        url: API_URL,
        data: {
            companyName,
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            accessToken
        }
    })
    .then(res => {
        if (res.status < 200 || res.status >= 300) {
            throw new Error(res.statusText);
        }
        return res.data;
    })
    .then(json => {
      return this.props.getCompanies(json);
    });
  }

  render () {
      const { classes, companyName } = this.props;
      return (
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => this.fetchData(companyName)}
          >
            Search
          </Button>
        </div>
      );
  }
}


SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchButton);