import { BaseUrl } from "../constants/baseUrl";
import * as request from "../lib/requester";

const url = `${BaseUrl}/users`;

export const login = async (email, password) => {

    const result = await request.post(`${url}/login`, { email, password });

    return result;
};

export const register = async (username, email, password, imageUrl) => {

    const result = await request.post(`${url}/register`, { username, email, password, imageUrl });

    return result;
};

export const logout = async () => {

    const result = await request.get(`${url}/logout`);
};