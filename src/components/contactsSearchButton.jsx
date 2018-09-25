import axios from 'axios';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import qs from 'qs';

const API_URL = `https://api.insideview.com/api/v1/target/contacts`;


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
  }
  
  fetchData = (params) => {
    const data = qs.stringify(params);
    if (!params) return null; 
    const accessToken = localStorage.getItem('token');
    return axios({ 
        method: 'post',
        url: API_URL,
        data,
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
      return this.props.getContacts(json);
    });
  }

  render () {
      const { classes, params } = this.props;
      return (
        <div>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => this.fetchData(params)}
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