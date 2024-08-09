import { Suspense, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Delete from '../delete/Delete';

import { useAuthContext } from '../../../contexts/authContext';
import { useModalContext } from '../../../contexts/modalContext';
import * as resourceService from '../../../services/resourceService';
import * as likeService from '../../../services/likeService';
import { durationConverter } from '../../../utils/durationConverter';
import { pathBuilder } from '../../../utils/pathConverter';
import { Path } from '../../../constants/path';
import { Spinner } from 'react-bootstrap';


export default function Details() {
    const { id } = useParams();
    const { auth, isAuth } = useAuthContext();
    const { setModal } = useModalContext();
    const [resource, setResource] = useState({});


    useEffect(() => {
        Promise.all([
            resourceService.getOne(id),
            likeService.getByResource(id),
        ]).then(([resourceData, likes]) => {
            const resourceState = { ...resourceData, likes };
            setResource(resourceState);
        })
            .catch(err => console.log(err));
    }, [id]);

    const { title, imageUrl, description, difficulty, _id, duration, _ownerId } = resource;

    const convertedDuration = durationConverter(duration);

    const isOwner = _ownerId === auth._id;

    const onLikeSubmit = async () => {
        const like = await likeService.create(id);
        setResource(state => ({
            ...state,
            likes: [...state.likes, like]
        }));
    };

    const alreadyLiked = resource?.likes?.find(x => x._ownerId === auth._id);

    console.log(resource);

    if (!resource.title) {
        return (
            <div className="spinnerContainer">
                <Spinner className='spinner' animation="border" />
            </div>
        );

    }

    return (
        <div className="detailsContainer">
            <div className="header">
                <div className="headerTitle">
                    <h2>{title}</h2>
                </div>
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
                        <p className="fa-stack-1x fa-stack-text fa-inverse"> {resource?.likes?.length} </p>
                    </span>

                    {isAuth
                        && !alreadyLiked
                        && <Button
                            className='likeBtn'
                            variant="success"
                            onClick={() => onLikeSubmit()}
                        >Like</Button>}
                </div>
            </div>
            <p className='description'><strong>Description :</strong> {description}</p>
            <p><strong>Duration :</strong> {convertedDuration}</p>
            <p><strong>Difficulty Level :</strong> {difficulty}</p>
        </div>
    );
}