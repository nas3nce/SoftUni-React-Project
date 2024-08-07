import { useAuthContext } from "../../../contexts/authContext";
import { elapsedTime } from "../../../utils/dateConverter";

export default function Profile() {
    const { auth } = useAuthContext();
    const { username, email, _createdOn, imageUrl } = auth;

    return (
        <div className="profileContainer">
            <h3>{username}</h3>
            <img src={imageUrl} alt="" />
            <p><strong>Email:</strong> {email}</p>
            <p><strong>User since :</strong> {elapsedTime(_createdOn)}</p>
        </div>
    );

}