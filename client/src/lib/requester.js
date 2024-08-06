
const buildOptions = (data) => {
    const options = {};
    const token = localStorage.getItem('accessToken');

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json',
        };
    }

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    return options;
};


const request = async (method, url, data) => {


    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    if (response.status == 204) {
        return {};
    }

    const result = await response.json();

    if (!response.ok) {
        console.log('asdasdasd' , response);
        throw result
    }

    return result;
};

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const remove = request.bind(null, 'delete');
export const patch = request.bind(null, 'patch');