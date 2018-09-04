import { stringify } from 'query-string';
import {
    GET_LIST,
} from 'react-admin';

// const CORS = `https://cors-anywhere.herokuapp.com/`;
const API_URL = `https://api.insideview.com/api/v1`;
const accessToken = localStorage.getItem('token');

export default (type, resource, params) => {
    let url = '';
    const options = { 
        headers : new Headers({
            Accept: 'application/json',
            accessToken,
        }),
    };
    switch (type) {
        case GET_LIST: {
            const query = {
                name: 1,
            };
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
            // console.log(res.json());
            return res.json();
        })
        .then(json => {
            console.log(json);
            const companies = json.companies.map(c => { c.id = c.companyId });
            console.log(companies);
            console.log(json);
            // json.data = companies;
            switch (type) {
                case GET_LIST: {
                    return {
                        data: json.companies,
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
                // case GET_MANY_REFERENCE: {
                //     if (!headers.has('content-range')) {
                //         throw new Error(
                //             'The Content-Range header is missing in the HTTP Response. The simple REST data provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare Content-Range in the Access-Control-Expose-Headers header?'
                //         );
                //     }
                //     return {
                //         data: {json},
                //         total: parseInt(
                //             headers
                //                 .get('content-range')
                //                 .split('/')
                //                 .pop(),
                //             10
                //         ),
                //     };
                //     break;
                // }
                // case CREATE:
                //     return { data: { ...params.data, id: json.id } };
                default:
                    return { data: json.companies };
            }
        });

};