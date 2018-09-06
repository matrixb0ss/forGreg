import { stringify } from 'query-string';
import { GET_LIST, GET_ONE } from 'react-admin';

const API_URL = `https://api.insideview.com/api/v1`;
const accessToken = localStorage.getItem('token');
const options = { 
    headers : new Headers({
        Accept: 'application/json',
        accessToken,
    }),
};

const getQuery = (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
        sort: JSON.stringify([field, order]),
        range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
        page: `${page}`,
        filter: JSON.stringify(params.filter),
    };

    if (resource === 'companies') query.name = 'cs';
    if (resource === 'contacts') query.fullName = 'G';
    return query;
}

const getURL = (type, resource, params) => {
    switch (type) {
        case GET_LIST: {
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
            return json.contacts;
    }
}

const fetchData = (type, resource, url, options, params) => {
    return fetch(url, options)
        .then(res => {
            return res.json();
        })
        .then(json => {
            const result = transformData(json, resource);
            switch (type) {
                case GET_LIST: {
                    return {
                        data: result,
                        total: 100,
                    };
                }
                case GET_ONE: {
                    return {
                        data: result,
                        total: 100,
                    };
                }
                default:
                    return { data: json };
            }
        })
        .catch(err => console.warn(err || err.message));
}


export default (type, resource, params) => {
    const url = getURL(type, resource, params);

    return fetchData(type, resource, url, options, params);
};