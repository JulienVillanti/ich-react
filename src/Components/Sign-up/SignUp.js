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
            navigate('/profile', { state: { email: userCredential.user.email } });
        } catch (error) {
            console.error('Error creating user', error);
            setError(error.message);
            setTimeout(() => setError(''), 2000);
        }
    };

    return (
        <div className="signup">
            <div className="signup__container">
                <h1 className="signup__title">Sign-Up</h1>
                <form onSubmit={handleSignup}>
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
                    <button type="submit" className="signup__btn" >Sign-Up</button>
                </form>
                {error && <p className="error">{"Something went wrong, please try again"}</p>}
                <div>
                    <span>Already have an account? </span><Link to="/login">Login</Link>
                </div>

            </div>
        </div>
    );

}
export default SignUp;  