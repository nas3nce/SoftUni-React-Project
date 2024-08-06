import { createContext, useContext, useState } from "react";

const ErrorContext = createContext();

export const ErrorProvider = ({
    children,
}) => {
    const [error, setErrorState] = useState('');

    const setError = (value) => {
        console.log(value);
        setErrorState(value);
    };

    const errorContextProviderValues = {
        error,
        setError
    };

    return (
        <ErrorContext.Provider value={errorContextProviderValues}>
            {children}
        </ErrorContext.Provider>
    );
};

export const useErrorContext = () => {
    const context = useContext(ErrorContext);

    return context;
};
