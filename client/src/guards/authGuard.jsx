import  { useAuthContext } from "../contexts/authContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AuthGuard() {
    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return <Navigate to="/404" />;
    }

    return <Outlet />;
}