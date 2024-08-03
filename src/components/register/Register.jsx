import Form from 'react-bootstrap/Form';


export default function Register() {
    return (
        
        <div  className='formContainer mt-3'>

            <h2 className='text-center p-3'>Register</h2 >
            <Form>
                <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Profile Picture Link</Form.Label>
                    <Form.Control type="text" placeholder="https://..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                </Form.Group>
            </Form>
        </div>
    );

}