import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { useAuthContext } from '../../../contexts/authContext';
import { useModalContext } from '../../../contexts/modalContext';
import * as resourceService from '../../../services/resourceService';
import { durationConverter } from '../../../utils/durationConverter';
import { pathBuilder } from '../../../utils/pathConverter';
import { Path } from '../../../constants/path';
import Delete from '../delete/Delete';

export default function Details() {
    const { id } = useParams();
    const { auth, isAuth } = useAuthContext();
    const { setModal } = useModalContext();
    const [resource, setResource] = useState({});


    useEffect(() => {
        resourceService.getOne(id)
            .then(result => setResource(result))
            .catch(err => console.log(err));
    }, []);

    const { title, imageUrl, description, difficulty, _id, duration, _ownerId } = resource;

    const convertedDuration = durationConverter(duration);

    const isOwner = _ownerId === auth._id;

    return (
        <div className="detailsContainer">
            <div className="header">
                <h2>{title}</h2>
                <div className="buttons">
                    {isOwner &&
                        <>
                            <Link to={pathBuilder(Path.Edit, { id: _id })} >  <Button variant='dark'> Edit</Button></Link>
                            <Button variant='dark' onClick={() => setModal(true)} asd={resource}> Delete</Button>
                            <Delete {...resource} />
                        </>
                    }
                </div>
            </div>
            <div className="imageContainer">
                <img src={imageUrl} alt="" />
                <div className="like">

                    <span className="fa-stack">
                        <i className="fa-solid fa-heart fa-stack-2x"></i>
                        <p className="fa-stack-1x fa-stack-text fa-inverse"> 87 </p>
                    </span>

                    {isAuth && <Button className='likeBtn' variant="success">Like</Button>}
                </div>
            </div>
            <p className='description'><strong>Description :</strong> {description}</p>
            <p><strong>Duration :</strong> {convertedDuration}</p>
            <p><strong>Difficulty Level :</strong> {difficulty}</p>
        </div>
    );
}