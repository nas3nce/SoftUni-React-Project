import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuthContext } from '../../../contexts/authContext';
import formKeys from '../../../constants/formKeys';
import useForm from '../../../hooks/useForm';
import { useMemo } from 'react';
import AlertMessage from '../../errorComponents/alertMessage/AlertMessage';
import { useErrorContext } from '../../../contexts/errorContext';


export default function Register() {
    const { registerSubmitHandler } = useAuthContext();
    const { error } = useErrorContext();

    const initialValues = useMemo(() => ({
        [formKeys.Email]: '',
        [formKeys.Username]: '',
        [formKeys.ImageUrl]: '',
        [formKeys.Password]: '',
        [formKeys.RePass]: ''
    }), []);

    const { formValues, onChange, onSubmit } = useForm(registerSubmitHandler, initialValues);

    return (
        <div className='formContainer mt-3'>
            {error && <AlertMessage {...error} />}

            <h2 className='text-center p-3'>Register</h2 >
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address *</Form.Label>
                    <Form.Control
                        type="email"
                        name={formKeys.Email}
                        placeholder="name@example.com"
                        onChange={onChange}
                        value={formValues.email}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Username *</Form.Label>
                    <Form.Control
                        type="text"
                        name={formKeys.Username}
                        placeholder="Your Username Here"
                        onChange={onChange}
                        value={formValues.username}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Profile Picture Link</Form.Label>
                    <Form.Control
                        type="url"
                        name={formKeys.ImageUrl}
                        placeholder="https://..."
                        onChange={onChange}
                        value={formValues.imageUrl}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password *</Form.Label>
                    <Form.Control
                        type="password"
                        name={formKeys.Password}
                        placeholder="******"
                        onChange={onChange}
                        value={formValues.password}
                        required
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Repeat Password *</Form.Label>
                    <Form.Control
                        type="password"
                        name={formKeys.RePass}
                        placeholder="******"
                        onChange={onChange}
                        value={formValues.rePass}
                        required
                    />

                </Form.Group>
                <Button type='submit' variant='dark' className='w-100'> Register </Button>
            </Form>
        </div>
    );

}