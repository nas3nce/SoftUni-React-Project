import { useEffect, useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import formKeys from '../../constants/formKeys';
import useForm from '../../hooks/useForm';

import { useResourceContext } from '../../contexts/resourceContext';

import * as resourceService from '../../services/resourceService';
import { useNavigate, useParams, Navigate } from 'react-router-dom';
import { Path } from '../../constants/path';
import { pathBuilder } from '../../utils/pathConverter';
import { useAuthContext } from '../../contexts/authContext';

export default function Edit() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { auth } = useAuthContext();
    const { onEditSubmit, getResource } = useResourceContext();

    const initialValues = useMemo(() => ({
        [formKeys.Title]: '',
        [formKeys.ImageUrl]: '',
        [formKeys.Difficulty]: '',
        [formKeys.Duration]: '',
        [formKeys.Description]: ''
    }), []);

    const isOwner = auth._id === getResource(id)?._ownerId;

    if (!isOwner) {
        return <Navigate to={Path.Error} />;
    }

    useEffect(() => {
        resourceService.getOne(id)
            .then(result => changeValues(result));
    }, []);

    const { formValues, onChange, onSubmit, changeValues } = useForm(onEditSubmit, initialValues);
  
    return (

        <div className='formContainer mt-3'>

            <h2 className='text-center p-3'>Edit Trail</h2 >
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Trail Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Trail Name"
                        name={formKeys.Title}
                        onChange={onChange}
                        value={formValues.title}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Trail Image Link</Form.Label>
                    <Form.Control type="url"
                        placeholder="https://..."
                        name={formKeys.ImageUrl}
                        onChange={onChange}
                        value={formValues.imageUrl}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select
                        aria-label="Select"
                        name={formKeys.Difficulty}
                        onChange={onChange}
                        value={formValues.difficulty}                    >
                        <option>Select Trail Difficulty</option>
                        <option value="Walk in the park">Walk in the park</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Strenuous">Strenuous</option>
                        <option value="45 Degrees of Pain">45 Degrees of Pain</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Average Duration</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Time In Minutes"
                        name={formKeys.Duration}
                        onChange={onChange}
                        value={formValues.duration}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        type="text"
                        placeholder="Trail Info"
                        name={formKeys.Description}
                        onChange={onChange}
                        value={formValues.description}
                    />
                </Form.Group>

                <div className='d-flex g-4'>

                    <Button type='submit' variant='dark' className='w-50'> Edit Trail </Button>
                    <Button
                        variant='dark'
                        className='w-50'
                        onClick={() => navigate(pathBuilder(Path.Details, { id }))}
                    > Cancel </Button>
                </div>
            </Form>
        </div>
    );

}