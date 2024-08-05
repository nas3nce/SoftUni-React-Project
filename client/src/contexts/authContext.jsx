import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import { Path } from "../constants/path";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});

    const loginSubmitHandler = async (formValues) => {
        const result = await authService.login(formValues.email, formValues.password);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (formValues) => {
        const result = await authService.register(formValues.username, formValues.email, formValues.password, formValues.imageUrl);

        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
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
