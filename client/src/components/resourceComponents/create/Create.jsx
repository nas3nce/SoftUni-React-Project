import { useMemo } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import formKeys from '../../../constants/formKeys';
import useForm from '../../../hooks/useForm';

import { useResourceContext } from '../../../contexts/resourceContext';
import { useErrorContext } from '../../../contexts/errorContext';
import AlertMessage from '../../errorComponents/alertMessage/AlertMessage';


export default function Create() {
    const { onCreateSubmit } = useResourceContext();
    const { error } = useErrorContext();

    const initialValues = useMemo(() => ({
        [formKeys.Title]: '',
        [formKeys.ImageUrl]: '',
        [formKeys.Difficulty]: '',
        [formKeys.Duration]: '',
        [formKeys.Description]: ''
    }), []);

    const { formValues, onChange, onSubmit } = useForm(onCreateSubmit, initialValues);

    return (
        <div className='formContainer mt-3'>
            {error && <AlertMessage {...error} />}

            <h2 className='text-center p-3'>Add a Trail</h2 >
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Trail Name *</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Trail Name"
                        name={formKeys.Title}
                        onChange={onChange}
                        value={formValues.title}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Trail Image Link *</Form.Label>
                    <Form.Control type="url"
                        placeholder="https://..."
                        name={formKeys.ImageUrl}
                        onChange={onChange}
                        value={formValues.imageUrl}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Difficulty *</Form.Label>
                    <Form.Select
                        aria-label="Select"
                        name={formKeys.Difficulty}
                        onChange={onChange}
                        value={formValues.difficulty}
                        required
                    >
                        <option value=''>Select Trail Difficulty</option>
                        <option value="Walk in the park">Walk in the park</option>
                        <option value="Moderate">Moderate</option>
                        <option value="Strenuous">Strenuous</option>
                        <option value="45 Degrees of Pain">45 Degrees of Pain</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Average Duration *</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Time In Minutes"
                        name={formKeys.Duration}
                        onChange={onChange}
                        value={formValues.duration}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Description *</Form.Label>
                    <Form.Control
                        as='textarea'
                        rows={3}
                        type="text"
                        placeholder="Trail Description"
                        name={formKeys.Description}
                        onChange={onChange}
                        value={formValues.description}
                        required
                    />
                </Form.Group>

                <Button type='submit' variant='dark' className='w-100'> Add a Trail </Button>
            </Form>
        </div>
    );

}