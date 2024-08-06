import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { Path } from "../constants/path";
import { useErrorContext } from "./errorContext";
import { formValidation } from "../utils/formValidation";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const { setError } = useErrorContext();

    const loginSubmitHandler = async (formValues) => {
        try {
            formValidation(formValues);

            const result = await authService.login(formValues.email, formValues.password);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);
        } catch (err) {
            return setError(err);
        }

    };

    const registerSubmitHandler = async (formValues) => {
        try {
            formValidation(formValues);

            const result = await authService.register(formValues.username, formValues.email, formValues.password, formValues.imageUrl);

            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home);

        } catch (err) {
            return setError(err);
        }
    };

    const logoutHandler = () => {

        setAuth({});
        localStorage.removeItem('accessToken');
        localStorage.clear;

        navigate(Path.Home);
    };

    const authContextProviderValues = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        auth,
        isAuth: !!auth.accessToken
    };

    return (
        < AuthContext.Provider value={authContextProviderValues}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const context = useContext(AuthContext);

    return context;
};
