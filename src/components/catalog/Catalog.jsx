import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function Catalog() {

    return (

        <>
            <h1 className="fs-7 mt-10">Choose Your Next Journey!</h1>
            <div className="catalogContainer">
                <div className="card">
                    <img src="public\images\background.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>
                </div>
                <div className="card">
                    <img src="public\images\123.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>
                <div className="card">
                    <img src="public\images\background.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>
                </div>
                <div className="card">
                    <img src="public\images\1231.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>
                <div className="card">
                    <img src="public\images\1231.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>
                <div className="card">
                    <img src="public\images\1231.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>                <div className="card">
                    <img src="public\images\1231.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>
                <div className="card">
                    <img src="public\images\1231.jpg" alt="" />
                    <h3 >ala bala</h3>
                    <p > Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum Lorem, Lorem ipsum</p>
                    <Link to={`id`}><Button variant="primary">Read More</Button> </Link>                </div>

            </div>
        </>
    );

}