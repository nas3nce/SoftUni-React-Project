import * as request from "../lib/requester";

const base_url = 'http://localhost:3030/users';

export const login = async (email, password) => {

    const result = await request.post(`${base_url}/login`, { email, password });

    return result;
};

export const register = async (username, email, password, imageUrl) => {

    const result = await request.post(`${base_url}/register`, { username, email, password , imageUrl});

    return result;
};

export const logout = async () => {

    const result = await request.get(`${base_url}/logout`);
};