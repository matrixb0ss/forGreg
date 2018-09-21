import { stringify } from 'query-string';
import { GET_LIST, GET_ONE } from 'react-admin';
import _ from 'lodash';
import axios from 'axios';

const API_URL = `https://api.insideview.com/api/v1`;

const getQuery = (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        page: `${page}`,
    };
    const filterIsEmpty = _.isEmpty(params.filter)

    if (resource === 'companies') {
        query.name = filterIsEmpty ? 's' : JSON.stringify(params.filter.search);
    }

    if (resource === 'contacts') {
        query.fullName = filterIsEmpty ? 'G' : JSON.stringify(params.filter.search);
    }
    return query;
}

const getURL = (type, resource, params) => {
    switch (type) {
        case GET_LIST: {
            if (resource === 'companies search form') {
                return `${API_URL}/target/companies`;
            }
            if (resource === 'contacts search form') {
                return `${API_URL}/target/contacts`;
            }
            const query = getQuery(resource, params);
            return `${API_URL}/${resource}?${stringify(query)}`;
        }
        case GET_ONE: {
            let single = '';
            if (resource === 'companies') single = 'company'
            if (resource === 'contacts') single = 'contact'
            return `${API_URL}/${single}/${params.id}`;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

const transformData = (json, resource) => {
    switch (resource) {
        case 'companies': {
            if (json.companies) {
                json.companies.forEach(c => c.id = c.companyId);
                return json.companies;
            }
            return {...json, id: json.companyId}
        }
        case 'contacts': {
            if(json.contacts) {
                json.contacts.forEach(c => c.id = c.contactId);
                return json.contacts;
            }
            return {...json, id: json.contactId}
        }
        default:
            return json.data;
    }
}

const fetchData = (type, resource, url) => {
    const accessToken = localStorage.getItem('token');
    const options = { 
        headers : new Headers({
            Accept: 'application/json',
            accessToken,
        }),
    };
    return fetch(url, options)
        .then(res => {
            console.log(res);
            if (res.status !== 200) return { data: [] };
            return res.json();
        })
        .then(json => {
            const result = transformData(json, resource);
            const totalResults = (json.totalResults < 100000) ? json.totalResults : 100000;  
            switch (type) {
                case GET_LIST: {
                    return {
                        data: result,
                        total: totalResults,
                    };
                }
                case GET_ONE: {
                    return {
                        data: result,
                    };
                }
                default:
                    return { data: json };
            }
        })
        .catch(err => console.warn(err || err.message));
}

const isRequestPOST = (resource) => {
    return (resource === 'companies search form' || resource === 'contacts search form')
}

const fetchByFilters = (url, resource, params) => {
    const accessToken = localStorage.getItem('token');
    const companyName = params.filter.companyName || '';
    return axios({ 
        method: 'post',
        url,
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
        console.log(res);
        return res.data;
    })
    .then(json => {
        const totalResults = (json.totalResults < 100000) ? json.totalResults : 100000;  
        return {
            data: json.companies,
            total: totalResults,
        };
    });
}

export default (type, resource, params) => {
    const url = getURL(type, resource, params);
    return isRequestPOST(resource)
    ? fetchByFilters(url, resource, params)
    : fetchData(type, resource, url, params);  
};