import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return (
        <>
            <h1>The Entrance To Bulgarian Beauty</h1>

            <div className='content'>

                <Carousel>
                    <Carousel.Item>
                        <img src="\public\images\123.jpg" alt="" />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="\public\images\1231.jpg" alt="" />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src="\public\images\background.jpg" alt="" />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>


        </>

    );

}