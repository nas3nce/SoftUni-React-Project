import { useAuthContext } from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function UserGuard() {
    const { isAuth } = useAuthContext();

    if (isAuth) {
        return <Navigate to="/404" />;
    }

    return <Outlet />;
}