import { BaseUrl } from "../constants/baseUrl";
import * as request from "../lib/requester";

const url = `${BaseUrl}/data/resource`;

export const getAll = async () => {
    const result = await request.get(url);

    return Object.values(result);
};

export const getOne = async (id) => {
    const result = await request.get(`${url}/${id}`);

    return result;
};

export const getLatest = async () => {
    const query = new URLSearchParams({
        offset: 0,
        pageSize: 3,        
    });

    const result = await request.get(`${url}?${query}&sortBy=_createdOn%20desc`);

    return result;
};

export const create = async (data) => {
    const result = await request.post(url, data);
    return result;
};


export const remove = async (id) => {
    const result = await request.remove(`${url}/${id}`);
    return result;
};


export const edit = async (data) => {
    const { _id } = data;

    const result = await request.put(`${url}/${_id}`, data);

    return result;
};



