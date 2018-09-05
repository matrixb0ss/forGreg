import { stringify } from 'query-string';
import {
    GET_LIST,
} from 'react-admin';

const API_URL = `https://api.insideview.com/api/v1`;
const accessToken = localStorage.getItem('token');

const getQuery = (resource) => {
    const companyQuery = { name: 1 };
    const contactsQuery = { fullName: 'A' };

    let query = {};
    if (resource === 'companies') query = companyQuery;
    if (resource === 'contacts') query = contactsQuery;
    return query;
}

const transformData = (json, resource) => {
    console.log(resource);
    let data;
    switch (resource) {
        case 'companies': {
            data = json.companies;
            json.companies.forEach(c => c.id = c.companyId);
            return data;
            break;
        }
        case 'contacts': {
            data = json.contacts;
            data = json.contacts.forEach(c => c.id = c.contactId);
            return data;
            break;
        }
    }
}

export default (type, resource, params) => {
    let url = '';
    const query = getQuery(resource);
    const options = { 
        headers : new Headers({
            Accept: 'application/json',
            accessToken,
        }),
    };

    switch (type) {
        case GET_LIST: {
            url = `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }

    let headers;
    return fetch(url, options)
        .then(res => {
            res.headers.append( 'Access-Control-Expose-Headers', 'Content-Range')
            res.headers.append('Content-Range','bytes : 0-9/*')
            headers = res.headers;
            return res.json();
        })
        .then(json => {
            const result = transformData(json, resource);
            console.log(json);
            console.log(result);
            switch (type) {
                case GET_LIST: {
                    return {
                        data: result,
                        total: parseInt(
                            headers
                                .get('content-range')
                                .split('/')
                                .pop(),
                            10
                        ),
                    };
                    break;
                }
                default:
                    return { data: json.companies };
            }
        });

};