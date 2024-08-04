import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';


export default function Create() {
    return (

        <div className='formContainer mt-3'>

            <h2 className='text-center p-3'>Add a Trail</h2 >
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Trail Name</Form.Label>
                    <Form.Control type="email" placeholder="Trail Name" />
                </Form.Group>

                
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                    <Form.Label>Starting Point</Form.Label>
                    <Form.Control type="text" placeholder="Location Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select aria-label="Default select example">
                        <option>Walk in the park</option>
                        <option value="1">Moderate</option>
                        <option value="2">Strenuous</option>
                        <option value="3">45 Degrees of Pain</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                    <Form.Label>Average Duration in Minutes</Form.Label>
                    <Form.Control type="number" placeholder="30" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                    <Form.Label>Trail Image Link</Form.Label>
                    <Form.Control type="text" placeholder="https://..." />
                </Form.Group>

                <Button variant='dark' className='w-100'> Add a Trail </Button>
            </Form>
        </div>
    );

}