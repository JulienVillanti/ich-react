import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";
import { signInWithEmailAndPassword} from "firebase/auth";
import './Login.css';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const { auth } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log('User Logged', userCredential);
            // setUser(userCredential.user.email);
            navigate('/profile', { state: { email: userCredential.user.email } });
        } catch (error) {
            console.error('Error logging in user', error);
            setError(error.message);
        }
    };


    return (
        <div className="login">
            <div className="login__container">
                <h1 className="login__title">Login</h1>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        className="login__textbox"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        required
                    />
                    <input
                        type="password"
                        className="login__textbox"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password address"
                        required
                    />
                    <button type="submit"
                        className="login__btn"
                    >
                        Login
                    </button>

                    <div className="forgot-password-link"><Link to="/passwordreset">Forgot Password</Link>
                    </div>
                </form>
                {error && <p className="error">{error}</p>}
                <div className="signup-link">
                    Don't have an account? <Link to="/signup">Sign-up</Link> now.
                </div>
            </div>
        </div>


    );

}
export default Login;