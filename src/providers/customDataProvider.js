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
    if (resource === 'contacts') query.fullName = 'J';
    return query;
}

const transformData = (json, resource) => {
    switch (resource) {
        case 'companies': {
            if(json.companies) {
                json.companies.forEach(c => c.id = c.companyId);
                return json.companies;
            }
            return {...json, id: json.companyId}
            break;
        }
        case 'contacts': {
            if(json.contacts) {
                json.contacts.forEach(c => c.id = c.contactId);
                return json.contacts;
            }
            return {...json, id: json.contactId}
            break;
        }
        default:
            return json;
    }
}

const fetchData = (type, resource, url, options, params) => {
    // options.body = params.pagination;
    console.log(options, 'options');
    // let headers;
    return fetch(url, options)
        .then(res => {
            console.log(res, '------------------------');
            // res.headers.append( 'Access-Control-Expose-Headers', 'Content-Range')
            // res.headers.append('Content-Range','bytes : 0-9/*')
            // headers = res.headers;
            return res.json();
        })
        .then(json => {
            console.log(json, '!!!!!!!!!!');
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
                case GET_ONE: {
                    return {
                        data: result,
                        total: 50,
                    };
                    break;
                }
                default:
                    return { data: json.companies };
            }
        })
        .catch(err => console.log(err || err.message, 'ERROR'))
}

const getURL = (type, resource, params) => {
    
    switch (type) {
        case GET_LIST: {
            const query = getQuery(resource, params);
            console.log(type, 'GET_lissrsrsrsrs');
            return `${API_URL}/${resource}?${stringify(query)}`;
        }
        case GET_ONE: {
            console.log(type, '555555555');
            return `${API_URL}/company/${params.id}`;
        }
        default:
            throw new Error(`Unsupported Data Provider request type ${type}`);
    }
}

export default (type, resource, params) => {
    console.log(type, 'TYPE');
    console.log(params, 'params');
    const url = getURL(type, resource, params);
    console.log(url, 'URL<<<<<<<<<<');

    return fetchData(type, resource, url, options, params);

};