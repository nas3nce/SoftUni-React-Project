import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModalContext } from '../../../contexts/modalContext';
import { formatTime } from '../../../utils/dateConverter';
import { useResourceContext } from '../../../contexts/resourceContext';
import * as resourceService from '../../../services/resourceService';


export default function Delete({
    title,
    _createdOn,
    _id
}) {
    const { show, setModal } = useModalContext();
    const { onDeleteSubmit } = useResourceContext();

    const onDeleteHandler = () => {
        resourceService.remove(_id);
        onDeleteSubmit(_id);
        setModal(false) 
    };

    return (
        <Modal
            show={show}
            backdrop='static'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered        >
            <Modal.Header closeButton onClick={() => setModal(false)}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are You Sure?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>You Are About To Delete Trail "{title}" created on {formatTime(_createdOn)}!</h6>
                <p>This Action is Permanent!</p>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-between'>
                <Button className='w-40' variant='dark' onClick={() => setModal(false)}>Back</Button>
                <Button className='w-40' variant='danger' onClick={onDeleteHandler}>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}
