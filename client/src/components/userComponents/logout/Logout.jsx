import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService';
import { useAuthContext } from "../../../contexts/authContext";
import { Path } from "../../../constants/path";


export default function Logout() {
    const { logoutHandler } = useAuthContext();

    const navigate = useNavigate();

    useEffect(() => {
        authService.logout()
            .then(() => {
                navigate(Path.Home);
                logoutHandler();
            })
            .catch(() => {
                logoutHandler();
                navigate(Path.Logout);
            });
    }, []);

    return null;
}