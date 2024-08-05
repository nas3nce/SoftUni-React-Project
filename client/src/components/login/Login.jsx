import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import formKeys from '../../constants/formKeys';
import { useMemo } from 'react';
import { useAuthContext } from '../../contexts/authContext';
import useForm from '../../hooks/useForm';


export default function Login() {

    const { loginSubmitHandler } = useAuthContext();

    const initialValues = useMemo(() => ({
        [formKeys.Email]: '',
        [formKeys.Password]: ''
    }), []);

    const { formValues, onChange, onSubmit } = useForm(loginSubmitHandler, initialValues);

    return (
        <div className='formContainer'>

            <h2 className='text-center p-3'>Login</h2 >
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name={formKeys.Email}
                        placeholder="name@example.com"
                        onChange={onChange}
                        value={formValues.Email}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="******"
                        name={formKeys.Password}
                        onChange={onChange}
                        value={formValues.Password}
                    />
                </Form.Group>
                <Button type='submit' variant='dark' className='w-100'> Login </Button>
            </Form>
        </div>
    );

}