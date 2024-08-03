import Form from 'react-bootstrap/Form';


export default function Login() {
    return (
        <div  className='formContainer'>

            <h2 class='text-center p-3'>Login</h2 >
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control type="password" placeholder="******"/>
                </Form.Group>
            </Form>
        </div>
    );

}