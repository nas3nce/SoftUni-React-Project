import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as resourceService from '../services/resourceService';
import { Path } from "../constants/path";
import { pathBuilder } from "../utils/pathConverter";
import { useErrorContext } from "./errorContext";
import { formValidation } from "../utils/formValidation";

export const ResourceContext = createContext();

export const ResourceProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [resources, setResources] = useState([]);
    const { setError } = useErrorContext();

    useEffect(() => {
        resourceService.getAll()
            .then(result => setResources(result))
            .catch(err => console.log(err));
    }, []);

    const onCreateSubmit = async (data) => {
        try {
            formValidation(data);

            const newResource = await resourceService.create(data);

            setResources(state => [...state, newResource]);

            navigate(Path.Catalog);
        } catch (err) {
            setError(err);
        }


    };

    const onEditSubmit = async (data) => {
        try {
            formValidation(data);

            const editedResource = await resourceService.edit(data);

            setResources(state => state.map(x => x._id === data._id ? editedResource : x));

            navigate(pathBuilder(Path.Details, { id: data._id }));
        } catch (err) {
            setError(err);
        }
    };

    const onDeleteSubmit = (id) => {
        setResources(resources.filter(x => id !== x._id));
        navigate(Path.Catalog);
    };


    const getResource = (id) => {
        return resources.find(x => x._id === id);
    };

    const contextValues = {
        resources,
        getResource,
        onCreateSubmit,
        onEditSubmit,
        onDeleteSubmit,
        setResources
    };

    return (
        <ResourceContext.Provider value={contextValues}>
            {children}
        </ResourceContext.Provider>
    );
};

export const useResourceContext = () => {
    const context = useContext(ResourceContext);

    return context;
};