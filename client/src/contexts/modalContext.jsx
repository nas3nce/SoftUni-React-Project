import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({
    children,
}) => {
    const [show, setShow] = useState(false);

    const setModal = (value) => {
        setShow(value);
    };

    const modalContextProviderValues = {
        show,
        setModal
    };
    
    return (
        <ModalContext.Provider value={modalContextProviderValues}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModalContext = () => {
    const context = useContext(ModalContext);

    return context;
};
