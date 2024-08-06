import { Link } from "react-router-dom";
import { Path } from "../../../constants/path";
import { useAuthContext } from "../../../contexts/authContext";


export default function Header() {

    const { auth, isAuth } = useAuthContext();

    if (!auth.username) {
        auth.username = auth.email?.split('@')[0];
    }

    return (
        <div className="nav">
            <div className="headerLeft">
                <Link to={Path.Home}>
                    <div className="logo">
                        <img src="public\images\logo.png" alt="" />
                    </div>
                </Link>
                <Link to={Path.Profile}>
                    {isAuth &&
                        <p>Hello, {auth?.username}!</p>
                    }
                </Link>
            </div>
            <ul>
                <Link className="navButton" to={Path.Home}>Home</Link>
                <Link className="navButton" to={Path.Catalog}>Catalog</Link>
                {isAuth ?
                    <>
                        <Link className="navButton" to={Path.Create}>Add Trail</Link>
                        <Link className="navButton" to={Path.Profile}>Profile</Link>
                        <Link className="navButton" to={Path.Logout}>Logout</Link>
                    </>
                    :
                    <>
                        <Link className="navButton" to={Path.Login}>Login</Link>
                        <Link className="navButton" to={Path.Register}>Register</Link>
                    </>
                }
            </ul>
        </div>
    );
}