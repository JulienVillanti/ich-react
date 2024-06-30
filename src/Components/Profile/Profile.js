import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuth } from "../../AuthContext";
import { onAuthStateChanged, signOut } from "firebase/auth";
import './Profile.css';


const Profile = () => {
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();


    const handleSignOut = async () => {
        try {
            await logout();
            console.log("User signed out successfully!");
            navigate("/login");
        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

    return (
        <div className="profile">
            <div className="profile__container">
                <h1 className="profile__title">Hello, {currentUser?.email}</h1>
                <button className="profile__btn" onClick={handleSignOut}>Logout</button>
            </div>
        </div>
    );
};
export default Profile;