import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Carousel from 'react-bootstrap/Carousel';

import * as resourceService from '../../../services/resourceService';
import { pathBuilder } from '../../../utils/pathConverter';
import { Path } from '../../../constants/path';
import { Spinner } from 'react-bootstrap';

export default function Home() {
    const navigate = useNavigate();
    const [latest, setLatest] = useState([]);

    useEffect(() => {
        resourceService.getLatest()
            .then(result => setLatest(result))
            .catch(err => console.log(err));
    }, []);

    if (latest.length === 0) {
        return (
            <div className="spinnerContainer">
                <Spinner className='spinner' animation="border" />
            </div>
        );
    }

    return (
        <>
            <h1>The Entrance To Bulgarian Beauty</h1>

            <div className='content'>

                <Carousel>

                    {latest?.map(resource =>
                        <Carousel.Item className='hoverDim' key={resource._id} onClick={() => navigate(pathBuilder(Path.Details, { id: resource._id }))}>
                            <img className='carouselImg' src={resource.imageUrl} alt="" />
                            <Carousel.Caption>
                                <h3>{resource.title}</h3>
                                <p>
                                    {resource.description}
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )}

                </Carousel>
            </div>
        </>
    );
}