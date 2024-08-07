import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function CatalogItem({
    _id,
    title,
    imageUrl,
    description
}) {
    return (
        <div className="card">
            <img src={imageUrl} alt="" />
            <h3 >{title}</h3>
            <p > {description}</p>
            <Link to={_id}> <Button variant="dark">Read More</Button></Link>
        </div>
    );
}

