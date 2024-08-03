import { Link } from "react-router-dom";
import { Path } from "../../constants/path";


export default function Header() {

    return (
        <div className="nav">
            <div className="headerLeft">
                <Link to={Path.Home}>
                    <div className="logo">
                        <img src="public\images\logo.png" alt="" />
                    </div>
                </Link>
                <Link to={Path.Profile}>
                    <p>Hello, User!</p>
                </Link>
            </div>
            <ul>
                <Link className="navButton" to={Path.Home}>Home</Link>
                <Link className="navButton" to={Path.Register}>Register</Link>
                <Link className="navButton" to={Path.Login}>Login</Link>
                <Link className="navButton" to={Path.Logout}>Logout</Link>
                <Link className="navButton" to={Path.Catalog}>Catalog</Link>
                <Link className="navButton" to={Path.Create}>Create</Link>
                <Link className="navButton" to={Path.Profile}>Profile</Link>
            </ul>
        </div>
    );
}