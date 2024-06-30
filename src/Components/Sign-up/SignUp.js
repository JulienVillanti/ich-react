import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import './SignUp.css';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleSignup = async (e) => {
    e.preventDefault();
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('User Created', userCredential);
        navigate('/', { state: {email: userCredential.user.email} });
    } catch (error) {
        console.error('Error creating user', error);
        setError(error.message);
}
};

    return (
        <div className="signup">
            <div className="signup__container">
                <h1 className="signup__title">Sign-Up</h1>
                <form>
                <input
                    type="email"
                    className="signup__textbox"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email address"
                    required
                />

                <input
                    type="password"
                    className="signup__textbox"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                    <button type="submit" className="signup__btn" onClick={handleSignup}>Sign-Up</button>
                </form>
                {error && <p className="error">{"Please try again"}</p>} 
                <div>
                    <span>Already have an account? </span><Link to="/login">Login</Link>
                </div>
               
            </div>
        </div>
    );

}
export default SignUp;  