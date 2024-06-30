import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import './Profile.css';


const Profile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const email = location.state?.email || " No email provided";
    
    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

    return (
        <div className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Hello, { email }</h1>
                <button className="profile__btn" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};
export default Profile;