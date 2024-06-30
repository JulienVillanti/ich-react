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
            navigate("/");

        } catch (error) {
            console.log("Error signing out: ", error);
        }
    };

    return (
        <div className="profile">
            <div className="profile__container">
                { currentUser ? (
                    <>
                        <h1 className="profile__title">Ola, <span className="profile__name"> {currentUser?.email}</span></h1>
                        <button className="profile__btn" onClick={handleSignOut}>Logout</button>
                    </>
                ) : (
                        <>
                        <h1 className="profile__title">Ola! <span className="profile__name"> Please log in</span></h1>
                        <button
                        className="login__btn"
                        onClick={() => navigate("/login")}>
                        Login
                            </button>
                        </>
                )}
                
            </div>
        </div>
    );
};
export default Profile;