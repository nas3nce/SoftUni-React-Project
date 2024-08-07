import { BaseUrl } from "../constants/baseUrl";
import * as request from '../lib/requester'


const url = `${BaseUrl}/data/likes`;

export const getByResource = async (id) => {
    const query = new URLSearchParams({
        where: `gameId="${id}"`,
        load: `owner=_ownerId:users`
    });

    const result = await request.get(`${url}?${query}`);

    return result;
};

export const getall = async () => {


    const result = await request.get(`${url}`);

    console.log(result);
    return result;


};
export const create = async (id) => {
    const like = await request.post(url, {gameId: id });

    return like;
};