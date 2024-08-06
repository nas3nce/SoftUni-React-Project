import Alert from 'react-bootstrap/Alert';
import { useAuthContext } from '../../../contexts/authContext';
import { useEffect } from 'react';
import { useErrorContext } from '../../../contexts/errorContext';

export default function AlertMessage({
    message
}) {
    const { setError } = useErrorContext();

    useEffect(() => () => clearTimeout(), [message]);

    setTimeout(() => {
        setError('');
    },
        3000
    );

    return (
        <Alert className='alert' key='danger' variant='danger'>
            {message}
        </Alert>
    );
}
