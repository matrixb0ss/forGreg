import { stringify } from 'query-string';
import {
    GET_LIST,
} from 'react-admin';

const API_URL = `https://api.insideview.com/api/v1`;
const accessToken = localStorage.getItem('token');
const options = { 
    headers : new Headers({
        Accept: 'application/json',
        accessToken,
    }),
};

const getQuery = (resource) => {
    const companyQuery = { name: 1 };
    const contactsQuery = { fullName: 'A' };

    let query = {};
    if (resource === 'companies') query = companyQuery;
    if (resource === 'contacts') query = contactsQuery;
    return query;
}

const transformData = (json, resource) => {
    switch (resource) {
        case 'companies': {
            json.companies.forEach(c => c.id = c.companyId);
            return json.companies;
            break;
        }
        case 'contacts': {
            json.contacts.forEach(c => c.id = c.contactId);
            return json.contacts;
            break;
        }
        default:
            return json;
    }
}

const fetchData = (type, resource, url, options) => {
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
            console.log(result, '<<<');
            switch (type) {
                case GET_LIST: {
                    return {
                        data: result,
                        total: 20,
                        // total: parseInt(
                        //     headers
                        //         .get('content-range')
                        //         .split('/')
                        //         .pop(),
                        //     10
                        // ),
                    };
                    break;
                }
                default:
                    return { data: json.companies };
            }
        });
}

const getURL = (type, resource) => {
    const query = getQuery(resource);

    switch (type) {
        case GET_LIST: {
            return `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

export default (type, resource) => {
    const url = getURL(type, resource);

    return fetchData(type, resource, url, options);

};