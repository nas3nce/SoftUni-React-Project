import { useAuthContext } from "../../contexts/authContext";
import moment from 'moment';


export default function Profile() {
    const { auth } = useAuthContext();
    const { username, email, _createdOn,imageUrl } = auth;



    console.log(auth._createdOn);
    const time = () => moment(auth._createdOn).fromNow();


    console.log(time());



    return (

        <div className="profileContainer">
            <h3>{username}</h3>
            <img src={imageUrl} alt="" />


            <p><strong>email:</strong> {email}</p>

            <p><strong>user since :</strong> {time()}</p>

        </div>
    );

}