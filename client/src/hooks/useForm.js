import { useEffect, useState } from "react";

export default function useForm(submitHandler, initialValues) {

    const [formValues, setFormValues] = useState({ ...initialValues });

    useEffect(() => {
        setFormValues(initialValues);
    }, [initialValues]);

    const onChange = (e) => {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        submitHandler(formValues);
        setValues(initialValues);

    };

    const changeValues = (newValues) => {
        setFormValues(newValues);
    };


    return {
        formValues,
        changeValues,
        onChange,
        onSubmit,
    };

}