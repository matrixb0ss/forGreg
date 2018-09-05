import { stringify } from 'query-string';
import { GET_LIST } from 'react-admin';

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
    if (resource === 'contacts') query.fullName = 'J';
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
    // let headers;
    return fetch(url, options)
        .then(res => {
            // res.headers.append( 'Access-Control-Expose-Headers', 'Content-Range')
            // res.headers.append('Content-Range','bytes : 0-9/*')
            // headers = res.headers;
            return res.json();
        })
        .then(json => {
            const result = transformData(json, resource);
            console.log(result, '<<<');
            switch (type) {
                case GET_LIST: {
                    return {
                        data: result,
                        total: 50,
                    };
                    break;
                }
                default:
                    return { data: json.companies };
            }
        });
}

const getURL = (type, resource, params) => {
    const query = getQuery(resource, params);

    switch (type) {
        case GET_LIST: {
            return `${API_URL}/${resource}?${stringify(query)}`;
            break;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

export default (type, resource, params) => {
    const url = getURL(type, resource, params);

    return fetchData(type, resource, url, options);

};