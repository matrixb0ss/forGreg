import axios from 'axios';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import qs from 'qs';

const API_URL = `https://api.insideview.com/api/v1/companies`;


const SearchButton = (props) => {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={() => fetchData(props)}
      >
        Search
      </Button>
    </div>
  );
}

const fetchData = (props) => {
  const { params } = props;
  const query = qs.stringify(params);
  const accessToken = localStorage.getItem('token');
  const url = `${API_URL}?${query}`
  const options = {
    headers : new Headers({
      Accept: 'application/json',
      accessToken,
    }),
  };
  return fetch(url, options)
    .then(res => {
      if (res.status !== 200) return { data: [] };
      return res.json();
    })
    .then(json => {
      return props.getCompanies(json);
    })
    .catch(err => console.warn(err || err.message));
}

// const fetchData = (props) => {
//   console.log(props);
//   const data = qs.stringify(props.params);
//   if (!props.params) return null;
//   const accessToken = localStorage.getItem('token');
//   return axios({
//     method: 'post',
//     url: API_URL,
//     data,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//       accessToken
//     }
//   })
//   .then(res => {
//     if (res.status < 200 || res.status >= 300) {
//       throw new Error(res.statusText);
//     }
//     return res.data;
//   })
//   .then(json => {
//     return props.getCompanies(json);
//   });
// }

const styles = theme => ({
  button: {
    marginLeft: 20,
  },
  input: {
    display: 'none',
  },
});

SearchButton.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(SearchButton);
