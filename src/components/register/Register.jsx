import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useAuthContext } from '../../contexts/authContext';
import formKeys from '../../constants/formKeys';
import useForm from '../../hooks/useForm';
import { useMemo } from 'react';


export default function Register() {
    const { registerSubmitHandler } = useAuthContext();

    const initialValues = useMemo(() => ({
        [formKeys.email]: '',
        [formKeys.username]: '',
        [formKeys.imageUrl]: '',
        [formKeys.password]: '',
        [formKeys.rePass]: ''
    }), []);

    const { formValues, onChange, onSubmit } = useForm(registerSubmitHandler, initialValues);


    return (

        <div className='formContainer mt-3'>

            <h2 className='text-center p-3'>Register</h2 >
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name={formKeys.email}
                        placeholder="name@example.com"
                        onChange={onChange}
                        value={formValues.email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        name={formKeys.username}
                        placeholder="Your Username Here"
                        onChange={onChange}
                        value={formValues.username}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Profile Picture Link</Form.Label>
                    <Form.Control
                        type="url"
                        name={formKeys.imageUrl}
                        placeholder="https://..."
                        onChange={onChange}
                        value={formValues.imageUrl}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name={formKeys.password}
                        placeholder="******"
                        onChange={onChange}
                        value={formValues.password} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control
                        type="password"
                        name={formKeys.rePass}
                        placeholder="******"
                        onChange={onChange}
                        value={formValues.rePass}
                    />

                </Form.Group>
                <Button type='submit' variant='dark' className='w-100'> Register </Button>
            </Form>
        </div>
    );

}