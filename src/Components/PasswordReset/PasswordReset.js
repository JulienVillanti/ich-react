import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import './PasswordReset.css';

const PasswordReset = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            await sendPasswordResetEmail(auth, email);
            console.log('Password reset link sent to the user email');
            setMessage('Password reset link has been sent, please check your mailbox');
            setTimeout(() => navigate('/login'), 3000);
        } catch (error) {
            console.error('Error sending password reset email', error);
            setError('Error sending password reset email, pllease try again');
        }
    }

    return (
        <div className="password-reset">
            <div className="password-reset__container">
                <h1 className="password-reset__title">Password Reset</h1>
                <form onSubmit={handlePasswordReset}>
                    <input
                        type="email"
                        className="password-reset__textbox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                    />
                    <button type="submit" className="password-reset__btn" >Submit</button>
                </form>
                {message && <p className="message">{message}</p>}
                {error && <p className="error">{error}</p>}
            </div>
        </div>
    )
}

export default PasswordReset;